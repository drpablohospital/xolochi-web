import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 hero-pattern overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-64 h-64 bg-salvia/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-terracota/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-96 h-96 bg-verde-profundo/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-verde-profundo/10 text-verde-profundo text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Psicología Infantil
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-verde-profundo mb-6 heading-display"
            >
              Xolochi
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-600 mb-6 font-light"
            >
              Acompañando su mundo interior
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Psicología infantil basada en el juego, el vínculo y la evidencia científica. 
              Un espacio seguro donde los niños pueden comprender lo que sienten y 
              desarrollar herramientas para su bienestar emocional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/agendar" className="btn-primary flex items-center justify-center gap-2">
                Agendar consulta
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a 
                href="#filosofia" 
                className="btn-secondary flex items-center justify-center"
              >
                Solicitar información
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-salvia" />
                <span>TCC basada en evidencia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terracota" />
                <span>Terapia a través del juego</span>
              </div>
            </motion.div>
          </div>

          {/* Visual/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glass card with elephant concept */}
              <div className="glass-card rounded-3xl p-8 relative z-10">
                <div className="aspect-square flex items-center justify-center"
003e
                  {/* Elephant SVG Illustration */}
                  <svg 
                    viewBox="0 0 200 200" 
                    className="w-full h-full max-w-md mx-auto"
                    fill="none"
                  >
                    {/* Big elephant silhouette */}
                    <motion.path
                      d="M60 140 C40 140 30 120 30 100 C30 70 50 50 80 50 C100 50 115 60 120 75 
                         L130 70 C140 65 155 70 160 85 C165 100 155 115 140 120 L140 140 
                         C140 150 130 155 120 150 L110 145 C105 150 95 150 90 145 L80 150 
                         C70 155 60 150 60 140 Z"
                      fill="#4F6F52"
                      fillOpacity="0.9"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    
                    {/* Baby elephant inside */}
                    <motion.path
                      d="M85 115 C75 115 70 105 70 95 C70 85 78 78 88 78 C98 78 105 83 107 90 
                         L112 88 C118 86 125 88 128 95 C130 102 125 108 118 110 L118 120 
                         C118 125 113 128 108 125 L103 123 C100 126 95 126 92 123 L87 125 
                         C82 128 77 125 77 120 L85 115 Z"
                      fill="#A8C3A0"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    />
                    
                    {/* Decorative elements */}
                    <circle cx="160" cy="40" r="8" fill="#D8A48F" fillOpacity="0.6" />
                    <circle cx="175" cy="55" r="5" fill="#D8A48F" fillOpacity="0.4" />
                    <circle cx="30" cy="150" r="6" fill="#A8C3A0" fillOpacity="0.5" />
                  </svg>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-verde-profundo font-medium italic">
                    "Protección y vínculo"
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-terracota/20 
                         backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-3xl">🌱</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-salvia/30 
                         backdrop-blur-sm flex items-center justify-center"
              >
                <span className="text-2xl">💚</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-verde-profundo/30 
                   flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-verde-profundo"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero