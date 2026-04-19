import { motion } from 'framer-motion'
import { ClipboardCheck, Gamepad2, Users, LineChart } from 'lucide-react'

const HowWeWork = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "Evaluación Individualizada",
      description: "Comenzamos con una evaluación completa para entender las necesidades específicas del niño, su contexto familiar y los objetivos terapéuticos."
    },
    {
      icon: Gamepad2,
      number: "02",
      title: "Intervención a través del Juego",
      description: "Utilizamos el juego como herramienta principal de trabajo, adaptando las técnicas de TCC a la etapa de desarrollo del niño."
    },
    {
      icon: Users,
      number: "03",
      title: "Trabajo con Padres",
      description: "Involucramos activamente a los padres en el proceso terapéutico, brindando orientación y herramientas para el acompañamiento en casa."
    },
    {
      icon: LineChart,
      number: "04",
      title: "Seguimiento Continuo",
      description: "Realizamos evaluaciones periódicas del progreso, ajustando el plan de intervención según las necesidades y avances del niño."
    }
  ]

  return (
    <section id="servicios" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-salvia/20 
                     text-verde-profundo text-sm font-medium mb-6"
          >
            Metodología
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-verde-profundo mb-4 heading-display"
          >
            ¿Cómo trabajamos?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Un proceso estructurado pero flexible, centrado en las necesidades 
            únicas de cada niño y familia.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8 h-full 
                           hover:shadow-xl hover:shadow-verde-profundo/10 
                           transition-all duration-300 group"
              >
                {/* Step number */}
                <span className="absolute -top-4 -right-2 text-6xl font-bold 
                               text-terracota/20 heading-display"
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-verde-profundo/10 
                             flex items-center justify-center mb-6
                             group-hover:bg-verde-profundo group-hover:scale-110 
                             transition-all duration-300"
                >
                  <step.icon className="w-7 h-7 text-verde-profundo group-hover:text-white 
                                     transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-verde-profundo mb-3"
                >
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed"
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork