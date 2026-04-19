import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// Configuración
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}))
app.use(express.json())

// Asegurar que existe el directorio de datos
const dataDir = path.join(__dirname, 'data')
try {
  await fs.mkdir(dataDir, { recursive: true })
} catch (err) {
  console.error('Error creando directorio de datos:', err)
}

// ==================== ROUTES ====================

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Guardar lead (formulario de contacto)
app.post('/api/leads', async (req, res) => {
  try {
    const { parentName, childName, childAge, reason, phone, email } = req.body
    
    // Validación básica
    if (!parentName || !childName || !childAge || !phone || !email) {
      return res.status(400).json({ 
        error: 'Faltan campos requeridos',
        required: ['parentName', 'childName', 'childAge', 'phone', 'email']
      })
    }

    const lead = {
      id: Date.now().toString(),
      parentName,
      childName,
      childAge: parseInt(childAge),
      reason: reason || '',
      phone,
      email,
      createdAt: new Date().toISOString(),
      status: 'new'
    }

    // Guardar en archivo JSON
    const leadsFile = path.join(dataDir, 'leads.json')
    let leads = []
    
    try {
      const data = await fs.readFile(leadsFile, 'utf8')
      leads = JSON.parse(data)
    } catch {
      // Archivo no existe, crear nuevo
    }
    
    leads.push(lead)
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2))

    console.log('✅ Nuevo lead recibido:', lead.email)
    
    res.status(201).json({ 
      success: true, 
      message: 'Lead registrado correctamente',
      leadId: lead.id 
    })
  } catch (error) {
    console.error('Error guardando lead:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// Obtener leads (para admin)
app.get('/api/leads', async (req, res) => {
  try {
    const leadsFile = path.join(dataDir, 'leads.json')
    const data = await fs.readFile(leadsFile, 'utf8')
    const leads = JSON.parse(data)
    res.json(leads)
  } catch {
    res.json([])
  }
})

// Crear sesión de checkout de Stripe
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { service, date, time } = req.body

    if (!service || !date || !time) {
      return res.status(400).json({ 
        error: 'Faltan datos requeridos (service, date, time)' 
      })
    }

    // Verificar que Stripe esté configurado
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder') {
      console.log('⚠️ Stripe no configurado, modo demo activo')
      return res.json({ 
        sessionId: 'demo_session',
        demo: true 
      })
    }

    // Crear sesión de Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: service.name,
              description: `${service.description} - ${date} a las ${time}`
            },
            unit_amount: service.price * 100 // Centavos
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/agendar`,
      metadata: {
        serviceId: service.id,
        serviceName: service.name,
        date,
        time
      }
    })

    // Guardar reserva pendiente
    const booking = {
      id: session.id,
      serviceId: service.id,
      serviceName: service.name,
      date,
      time,
      price: service.price,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    const bookingsFile = path.join(dataDir, 'bookings.json')
    let bookings = []
    
    try {
      const data = await fs.readFile(bookingsFile, 'utf8')
      bookings = JSON.parse(data)
    } catch {}
    
    bookings.push(booking)
    await fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2))

    console.log('✅ Sesión de checkout creada:', session.id)
    
    res.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creando sesión de checkout:', error)
    res.status(500).json({ error: 'Error procesando el pago' })
  }
})

// Webhook para confirmar pagos de Stripe
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (err) {
    console.error('Webhook error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    
    // Actualizar reserva a confirmada
    try {
      const bookingsFile = path.join(dataDir, 'bookings.json')
      const data = await fs.readFile(bookingsFile, 'utf8')
      const bookings = JSON.parse(data)
      
      const booking = bookings.find(b => b.id === session.id)
      if (booking) {
        booking.status = 'confirmed'
        booking.paidAt = new Date().toISOString()
        await fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2))
        console.log('✅ Pago confirmado para:', session.id)
      }
    } catch (err) {
      console.error('Error actualizando reserva:', err)
    }
  }

  res.json({ received: true })
})

// Obtener reservas (para admin)
app.get('/api/bookings', async (req, res) => {
  try {
    const bookingsFile = path.join(dataDir, 'bookings.json')
    const data = await fs.readFile(bookingsFile, 'utf8')
    const bookings = JSON.parse(data)
    res.json(bookings)
  } catch {
    res.json([])
  }
})

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log('🦘 Servidor Xolochi corriendo en http://localhost:' + PORT)
  console.log('📝 Endpoints disponibles:')
  console.log('   GET  /health')
  console.log('   POST /api/leads')
  console.log('   POST /api/create-checkout-session')
  console.log('   POST /api/webhooks/stripe')
})