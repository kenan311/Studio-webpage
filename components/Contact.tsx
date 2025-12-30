'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    location: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Emri është i detyrueshëm'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email është i detyrueshëm'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email nuk është i vlefshëm'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mesazhi është i detyrueshëm'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate form submission with better error handling
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate occasional network errors
          if (Math.random() < 0.1) {
            reject(new Error('Network error'))
          } else {
            resolve(true)
          }
        }, 2000)
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        location: '',
        message: ''
      })
      
      // Show success message
      alert('Faleminderit për mesazhin tuaj! Do t\'ju përgjigjemi brenda 24 orëve.')
    } catch (error) {
      alert('Ka ndodhur një gabim. Ju lutemi provoni përsëri ose na telefononi direkt.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Na Shkruani',
      details: 'kadriuproduction@gmail.com',
      description: 'Na dërgoni email në çdo kohë'
    },
    {
      icon: PhoneIcon,
      title: 'Na Telefononi',
      details: '+338 xxx xxx',
      description: 'Hënë-Premte 9:00-18:00'
    },
    {
      icon: MapPinIcon,
      title: 'Na Vizitoni',
      details: 'Rruga Dëshmorët e Kombit, Podujevë, Kosovë',
      description: 'Vetëm me takim'
    },
    {
      icon: ClockIcon,
      title: 'Koha e Përgjigjes',
      details: 'Brenda 24 orëve',
      description: 'I përgjigjemi të gjitha pyetjeve shpejt'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
            Le të <span className="text-gradient">Lidhemi</span>
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto font-montserrat">
            Gati të kapni ditën tuaj të veçantë? Do të na pëlqente të dëgjonim për vizionin tuaj dhe të ndihmonim ta bëjmë atë realitet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card p-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-charcoal-800 mb-6">
              Na Dërgoni një Mesazh
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                    Emri i Plotë *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Emri juaj i plotë"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                    Adresa Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="email@shembull.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Numri i Telefonit
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="+355 69 123 4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Data e Eventit
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Lloji i Eventit
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Zgjidhni llojin e eventit</option>
                    <option value="wedding">Martesë</option>
                    <option value="engagement">Fejesë</option>
                    <option value="elopement">Elopement</option>
                    <option value="portrait">Sesion Portretesh</option>
                    <option value="other">Tjetër</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Vendi i Eventit
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Qyteti, Shteti"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Na Trego Për Vizionin Tuaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Ndani detajet për eventin tuaj, preferencat e stilit, kërkesat e veçanta, ose çdo pyetje që keni..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Duke Dërguar...</span>
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  <span>Dërgo Mesazhin</span>
                </>
              )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-luxury text-2xl font-bold text-charcoal-800 mb-6">
                Lidhuni me Ne
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-8">
                Jemi këtu për të ndihmuar të bëni vizionin tuaj realitet. Pavarësisht nëse keni pyetje për shërbimet tona, 
                dëshironi të diskutoni eventin tuaj të ardhshëm, ose thjesht dëshironi të thoni përshëndetje, do të na pëlqente të dëgjonim nga ju.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-cream-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-800 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-charcoal-700 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-charcoal-500 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gold-50 rounded-xl p-6 border border-gold-200"
            >
              <h4 className="font-semibold text-charcoal-800 mb-2">
                Garancia e Përgjigjes së Shpejtë
              </h4>
              <p className="text-charcoal-600 text-sm">
                I përgjigjemi të gjitha pyetjeve brenda 24 orëve. Për kërkesa urgjente, 
                ju lutemi na telefononi direkt në numrin e mësipërm.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
