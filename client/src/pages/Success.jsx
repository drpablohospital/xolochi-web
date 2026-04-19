import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Clock, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Success = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-salvia/30 
                       flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-12 h-12 text-verde-profundo" />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-verde-profundo mb-4 heading-display"
          >
            ¡Tu cita ha sido agendada!
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Hemos recibido tu pago y confirmado tu cita. Te enviaremos 
            un correo con todos los detalles en los próximos minutos.
          </motion.p>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-crema/50 rounded-2xl p-6 mb-8 text-left"
          >
            <h3 className="font-semibold text-gray-800 mb-4">Próximos pasos:</h3>
            
            <ul className="space-y-3"
            >
              <li className="flex items-start gap-3"
              >
                <Mail className="w-5 h-5 text-verde-profundo flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Revisa tu correo electrónico para la confirmación con los detalles de la cita.
                </span>
              </li>
              
              <li className="flex items-start gap-3"
              >
                <Calendar className="w-5 h-5 text-verde-profundo flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Agrega la fecha a tu calendario para no olvidarla.
                </span>
              </li>
              
              <li className="flex items-start gap-3"
              >
                <Clock className="w-5 h-5 text-verde-profundo flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Llega 10 minutos antes de tu cita para completar cualquier documento necesario.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 text-sm mb-8"
          >
            <p>
              ¿Tienes preguntas? Escríbenos a{" "}
              <a href="mailto:hola@xolochi.com" className="text-verde-profundo hover:underline">
                hola@xolochi.com
              </a>
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Success