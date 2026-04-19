import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, User, Baby, Calendar, MessageSquare, Phone, Mail } from 'lucide-react'

const LeadForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    reason: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          parentName: '',
          childName: '',
          childAge: '',
          reason: '',
          phone: '',
          email: ''
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (err) {
      setError('Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-salvia/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-verde-profundo" />
        </div>
        <h3 className="text-2xl font-bold text-verde-profundo mb-4 heading-display">
          ¡Gracias por contactarnos!
        </h3>
        <p className="text-gray-600 mb-6">
          Hemos recibido tu información. Nos pondremos en contacto contigo 
          en menos de 24 horas para agendar tu consulta.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-verde-profundo font-medium hover:underline"
        >
          Enviar otra solicitud
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-3xl p-8 md:p-10"
    >
      <h3 className="text-2xl font-bold text-verde-profundo mb-2 heading-display">
        Solicita información
      </h3>
      <p className="text-gray-600 mb-8">
        Cuéntanos sobre ti y tu hijo para poder ayudarte mejor.
      </p>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="parentName"
              placeholder="Nombre del padre/madre *"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="input-field pl-12"
            />
          </div>

          <div className="relative">
            <Baby className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="childName"
              placeholder="Nombre del niño/a *"
              value={formData.childName}
              onChange={handleChange}
              required
              className="input-field pl-12"
            />
          </div>

          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              name="childAge"
              placeholder="Edad del niño/a *"
              value={formData.childAge}
              onChange={handleChange}
              required
              min="1"
              max="18"
              className="input-field pl-12"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field pl-12"
            />
          </div>
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico *"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field pl-12"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <textarea
            name="reason"
            placeholder="¿Cuál es el motivo de consulta? Cuéntanos brevemente lo que está sucediendo..."
            value={formData.reason}
            onChange={handleChange}
            rows={4}
            className="input-field pl-12 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 
                   disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar solicitud
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default LeadForm