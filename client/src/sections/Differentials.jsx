import { motion } from 'framer-motion'
import { Check, Award, Heart, Sparkles, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm'

const Differentials = () => {
  const differentials = [
    {
      icon: Award,
      title: "Basado en evidencia",
      description: "Utilizamos Terapia Cognitivo-Conductual (TCC), una de las terapias con mayor respaldo científico para el tratamiento de problemas emocionales en niños."
    },
    {
      icon: Heart,
      title: "Enfoque cálido y respetuoso",
      description: "Creamos un ambiente seguro donde los niños se sienten escuchados y valorados, fundamental para el proceso terapéutico."
    },
    {
      icon: Sparkles,
      title: "Atención personalizada",
      description: "Cada plan de intervención es único, diseñado específicamente para las necesidades, fortalezas y contexto de cada niño."
    },
    {
      icon: Shield,
      title: "Espacio seguro",
      description: "Nuestras instalaciones están diseñadas para que los niños se sientan cómodos, como en un segundo hogar."
    }
  ]

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Differentials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-terracota/10 
                       text-terracota text-sm font-medium mb-6"
            >
              Por qué elegirnos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-verde-profundo mb-4 heading-display"
            >
              Lo que nos distingue
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/50 hover:bg-white 
                         hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-verde-profundo/10 
                             flex items-center justify-center flex-shrink-0"
                >
                  <item.icon className="w-6 h-6 text-verde-profundo" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-verde-profundo mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Lead Form */}
          <LeadForm />

          {/* CTA Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-verde-profundo mb-4 heading-display">
                Comienza el acompañamiento
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                El primer paso es una consulta inicial donde evaluaremos las necesidades 
                de tu hijo y juntos definiremos el mejor camino para su bienestar emocional.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Primera consulta de evaluación",
                "Sin compromisos ni presiones",
                "Espacio seguro y confidencial"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-salvia/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-verde-profundo" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/agendar"
              className="inline-block btn-accent"
            >
              Agendar ahora →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Differentials