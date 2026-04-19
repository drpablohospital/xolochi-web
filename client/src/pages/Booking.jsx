import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Calendar, Clock, CreditCard, Loader2 } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

const services = [
  {
    id: 'evaluacion',
    name: 'Evaluación Inicial',
    description: 'Primera sesión de evaluación y diagnóstico para conocer las necesidades de tu hijo.',
    duration: '60 min',
    price: 1200,
    priceLabel: '$1,200 MXN'
  },
  {
    id: 'sesion',
    name: 'Sesión Individual',
    description: 'Sesión de terapia individual con técnicas de juego adaptadas a la TCC.',
    duration: '50 min',
    price: 900,
    priceLabel: '$900 MXN'
  }
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00'
]

const Booking = () => {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleServiceSelect = (service) => {
    setSelectedService(service)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleContinue = () => {
    if (step === 1 && selectedService) setStep(2)
    else if (step === 2 && selectedDate && selectedTime) setStep(3)
  }

  const handleBack = () => {
    setStep(step - 1)
    setError('')
  }

  const handlePayment = async () => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService,
          date: selectedDate,
          time: selectedTime
        })
      })

      const { sessionId, error: apiError } = await response.json()

      if (apiError) throw new Error(apiError)

      const stripe = await stripePromise
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId })

      if (stripeError) throw new Error(stripeError.message)
    } catch (err) {
      setError(err.message || 'Error al procesar el pago. Intenta de nuevo.')
      setIsLoading(false)
    }
  }

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
        dates.push(date)
      }
    }
    return dates
  }

  const availableDates = generateDates()

  const formatDate = (date) => {
    return date.toLocaleDateString('es-MX', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    })
  }

  const formatDateFull = (date) => {
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-verde-profundo mb-3 heading-display">
            Agenda tu consulta
          </h1>
          <p className="text-gray-600">
            Completa los siguientes pasos para reservar tu cita
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex justify-center mb-10"
        >
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${step === s ? 'step-indicator step-active' : 
                  step > s ? 'step-indicator step-completed' : 'step-indicator step-pending'}`}
              >
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-1 mx-2 rounded ${step > s ? 'bg-salvia' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="glass-card rounded-3xl p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-verde-profundo mb-6">
                  Selecciona el servicio
                </h2>

                <div className="space-y-4"
                >
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`service-card cursor-pointer ${
                        selectedService?.id === service.id ? 'selected' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3"
                      >
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-verde-profundo">
                            {service.priceLabel}
                          </p>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                      </div>

                      {selectedService?.id === service.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 w-6 h-6 rounded-full 
                                   bg-verde-profundo text-white flex items-center justify-center"
                        >
                          <Check className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-8"
                >
                  <button
                    onClick={handleContinue}
                    disabled={!selectedService}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50"
                  >
                    Continuar
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-verde-profundo mb-6">
                  Selecciona fecha y hora
                </h2>

                {/* Date selection */}
                <div className="mb-6"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Fecha disponible
                  </label>
                  
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2"
                  >
                    {availableDates.map((date) => (
                      <button
                        key={date.toISOString()}
                        onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                        className={`p-3 rounded-xl text-center transition-all ${
                          selectedDate === date.toISOString().split('T')[0]
                            ? 'bg-verde-profundo text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <div className="text-xs uppercase">
                          {date.toLocaleDateString('es-MX', { weekday: 'narrow' })}
                        </div>
                        <div className="font-semibold">{date.getDate()}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selection */}
                <div className="mb-6"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    <Clock className="inline w-4 h-4 mr-2" /
                    Horario disponible
                  </label>
                  
                  <div className="flex flex-wrap gap-2"
                  >
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-8"
                >
                  <button
                    onClick={handleBack}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /
                    Atrás
                  </button>
                  
                  <button
                    onClick={handleContinue}
                    disabled={!selectedDate || !selectedTime}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50"
                  >
                    Continuar
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-verde-profundo mb-6"
                >
                  <CreditCard className="inline w-5 h-5 mr-2" /
                  Confirmar y pagar
                </h2>

                {/* Summary */}
                <div className="bg-crema/50 rounded-2xl p-6 mb-6"
                >
                  <h3 className="font-semibold text-gray-800 mb-4">Resumen de tu cita</h3>
                  
                  <div className="space-y-3 text-sm"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-600">Servicio:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fecha:</span>
                      <span className="font-medium">
                        {selectedDate && formatDateFull(new Date(selectedDate))}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hora:</span>
                      <span className="font-medium">{selectedTime} hrs</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-medium">{selectedService?.duration}</span>
                    </div>
                    
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-verde-profundo">
                          {selectedService?.priceLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm mb-6">
                    {error}
                  </div>
                )}

                <div className="flex justify-between"
                >
                  <button
                    onClick={handleBack}
                    disabled={isLoading}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /
                    Atrás
                  </button>
                  
                  <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="btn-accent flex items-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /
                        Procesando...
                      </>
                    ) : (
                      <>
                        Pagar ahora
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default Booking