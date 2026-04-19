import { motion } from 'framer-motion'
import { Heart, Shield, Sparkles } from 'lucide-react'

const Philosophy = () => {
  const features = [
    {
      icon: Heart,
      title: "Vínculo",
      description: "Creemos en la fuerza del acompañamiento afectivo"
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Un espacio protegido para expresar emociones"
    },
    {
      icon: Sparkles,
      title: "Evidencia",
      description: "Prácticas basadas en investigación científica"
    }
  ]

  return (
    <section id="filosofia" className="section-padding bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-terracota/10 
                       text-terracota text-sm font-medium mb-6"
            >
              Nuestra Filosofía
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-verde-profundo mb-8 heading-display"
            >
              Un espacio para crecer
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 
                       border-l-4 border-terracota pl-6 italic"
            >
              "En Xolochi creemos que cada niño necesita un espacio seguro para 
              comprender lo que siente, expresar lo que vive y desarrollar herramientas 
              para su bienestar. Trabajamos desde la terapia cognitivo-conductual, 
              adaptada al juego y a la etapa de desarrollo, creando intervenciones 
              efectivas en un ambiente cálido y de confianza."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 leading-relaxed"
            >
              Entendemos que cada niño es único, con sus propias fortalezas y desafíos. 
              Por eso, nuestro enfoque es personalizado, respetuoso y centrado en el niño 
              y su familia, buscando siempre el bienestar integral y el desarrollo 
              de habilidades que les servirán toda la vida.
            </motion.p>
          </div>

          {/* Features grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card p-6 rounded-2xl group hover:bg-white/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-verde-profundo/10 
                               flex items-center justify-center flex-shrink-0
                               group-hover:bg-verde-profundo group-hover:text-white 
                               transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-verde-profundo group-hover:text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-verde-profundo mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy