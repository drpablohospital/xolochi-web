import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-verde-profundo text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold heading-display">Xolochi</span>
            </div>
            <p className="text-crema/80 italic">
              "Creciendo juntos desde el vínculo"
            </p>
            <p className="text-white/60 text-sm max-w-xs">
              Psicología infantil basada en el juego, el vínculo y la evidencia científica.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold heading-display">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-salvia" />
                <a href="mailto:hola@xolochi.com" className="hover:text-terracota transition-colors">
                  hola@xolochi.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-salvia" />
                <a href="tel:+521234567890" className="hover:text-terracota transition-colors">
                  +52 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-salvia flex-shrink-0" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold heading-display">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/xolochi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                         hover:bg-terracota transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/xolochi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                         hover:bg-terracota transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <Link
              to="/agendar"
              className="inline-block mt-4 px-6 py-3 bg-terracota rounded-xl 
                       hover:bg-terracota-dark transition-colors duration-300"
            >
              Agenda una consulta
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {currentYear} Xolochi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer