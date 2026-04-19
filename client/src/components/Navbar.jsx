import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Servicios', href: '#servicios' },
    { name: '¿Para quién?', href: '#para-quien' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-verde-profundo flex items-center justify-center 
                           group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-verde-profundo heading-display">
              Xolochi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {location.pathname === '/' && (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-verde-profundo font-medium 
                             transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracota 
                                   group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </>
            )}
            <Link
              to="/agendar"
              className="btn-accent text-sm"
            >
              Agendar consulta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-verde-profundo" />
            ) : (
              <Menu className="w-6 h-6 text-verde-profundo" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {location.pathname === '/' && (
                <>
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left px-4 py-3 rounded-xl 
                               text-gray-600 hover:text-verde-profundo hover:bg-white/50 
                               font-medium transition-all duration-300"
                    >
                      {link.name}
                    </button>
                  ))}
                </>
              )}
              <Link
                to="/agendar"
                className="block w-full text-center btn-accent mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar consulta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar