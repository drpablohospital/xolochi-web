# 🐘 Xolochi - Consultorio de Psicología Infantil

Aplicación web completa para el consultorio de psicología infantil Xolochi. Incluye landing page emocional, captación de leads y funnel de pagos integrado con Stripe.

## ✨ Características

- 🎨 **Diseño Glassmorphism** moderno y elegante
- 📱 **Responsive** mobile-first
- 💳 **Pagos con Stripe** Checkout integrado
- 📝 **Formulario de leads** funcional
- 🎭 **Animaciones suaves** con Framer Motion
- ⚡ **React + Vite** para máxima performance
- 🔧 **Backend Express** ligero y escalable

## 🚀 Instalación Rápida

```bash
# Clonar o navegar al proyecto
cd xolochi-web

# Instalar todas las dependencias (root + client + server)
npm run install:all

# Configurar variables de entorno
cp .env.example server/.env

# Editar server/.env con tus credenciales de Stripe
```

## 🖥️ Desarrollo Local

```bash
# Iniciar cliente y servidor simultáneamente
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 📁 Estructura del Proyecto

```
xolochi-web/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── sections/        # Secciones de la landing
│   │   ├── pages/           # Páginas
│   │   ├── hooks/           # Custom hooks
│   │   ├── styles/          # CSS global
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
├── server/                  # Backend Express
│   ├── routes/              # API routes
│   ├── data/                # Almacenamiento local
│   └── server.js
├── package.json             # Scripts raíz
└── README.md
```

## 🔐 Variables de Entorno

Copia `.env.example` a `server/.env` y configura:

| Variable | Descripción |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Secret key de Stripe |
| `STRIPE_PUBLISHABLE_KEY` | Publishable key de Stripe |
| `STRIPE_WEBHOOK_SECRET` | Webhook secret (para producción) |
| `PORT` | Puerto del servidor (default: 3001) |
| `CLIENT_URL` | URL del frontend |

## 🌐 Deploy en Render

### 1. Crear Web Service

1. Ve a [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Conecta tu repositorio de GitHub/GitLab

### 2. Configuración del Build

```yaml
# Build Command
npm run install:all && npm run build

# Start Command
npm start
```

### 3. Environment Variables

Agrega estas variables en Render Dashboard:

```
NODE_ENV=production
PORT=10000
CLIENT_URL=https://tu-url-de-render.onrender.com
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
```

### 4. Stripe Webhooks (Producción)

1. Ve a Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://tu-url.onrender.com/api/webhooks/stripe`
3. Selecciona eventos: `checkout.session.completed`
4. Copia el webhook secret a `STRIPE_WEBHOOK_SECRET`

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Salvia | `#A8C3A0` | Elementos secundarios |
| Verde Profundo | `#4F6F52` | Botones primarios, énfasis |
| Crema | `#F5F1E8` | Fondos, textos sobre oscuro |
| Terracota | `#D8A48F` | Acentos, hover states |

## 📞 Contacto

**Xolochi** - Psicología Infantil
🌐 www.xolochi.com
📧 hola@xolochi.com

---

Desarrollado con ❤️ para acompañar el mundo interior de los niños.