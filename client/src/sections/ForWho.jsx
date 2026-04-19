import { motion } from 'framer-motion'
import { Brain, AlertCircle, Target, HeartHandshake, Users } from 'lucide-react'

const ForWho = () => {
  const conditions = [
    {
      icon: AlertCircle,
      title: "Ansiedad",
      description: "Miedos separación, ansiedad social, preocupaciones excesivas",
      color: "bg-amber-100 text-amber-700"
    },
    {
      icon: Brain,
      title: "Problemas de Conducta",
      description: "Desafíos en el comportamiento, límites, reglas",
      color: "bg-rose-100 text-rose-700"
    },
    {
      icon: Target,
      title: "Déficit de Atención",
      description: "TDAH, dificultades de concentración, hiperactividad",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: HeartHandshake,
      title: "Dificultades Emocionales",
      description: "Regulación emocional, cambios de humor, frustración",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Users,
      title: "Desarrollo Socioemocional",
      description: "Habilidades sociales, amistades, empatía",
      color: "bg-emerald-100 text-emerald-700"
    }
  ]

  return (
    <section id="para-quien" className="section-padding bg-gradient-to-b from-white to-crema/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-verde-profundo/10 
                     text-verde-profundo text-sm font-medium mb-6"
          >
            Atención Especializada
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-verde-profundo mb-4 heading-display"
          >
            ¿Para quién es?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Atendemos niños y adolescentes que enfrentan diversos desafíos 
            emocionales y conductuales, siempre con un enfoque personalizado.
          </motion.p>
        </div>

        {/* Conditions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group 
                       hover:shadow-xl hover:-translate-y-1 
                       transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center 
                              flex-shrink-0 ${condition.color}`}
                >
                  <condition.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 
                               group-hover:text-verde-profundo transition-colors"
                  >
                    {condition.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {condition.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            ¿No ves lo que buscas? <a href="#contacto" className="text-verde-profundo font-medium hover:underline">Contáctanos</a>{" "}
            y conversamos sobre tu situación específica.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ForWho