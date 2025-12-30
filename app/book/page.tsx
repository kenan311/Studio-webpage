'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Event Details
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    guestCount: '',
    
    // Step 2: Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 3: Package Selection
    package: '',
    addOns: [],
    
    // Step 4: Additional Details
    specialRequests: '',
    howDidYouHear: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const packages = [
    {
      id: 'wedding-photo',
      name: 'Fotografi Martesore',
      price: '€000',
      description: 'Mbulim i plotë i ditës me fotografi artistike dhe spontane',
      features: ['Mbulim 8-12 orësh', '500+ foto të redaktuara', 'Galeri online', 'Të drejta printimi'],
      popular: true
    },
    {
      id: 'wedding-video',
      name: 'Videografi Martesore',
      price: '€000',
      description: 'Filma martesore kinematografike me redaktim profesional',
      features: ['Video përmbledhëse', 'Ceremoni e plotë', 'Mbulim feste', 'Video me dron']
    },
    {
      id: 'combo',
      name: 'Paketa Foto + Video',
      price: '€000',
      description: 'Mbulim i plotë me fotografi dhe videografi',
      features: ['Gjithçka nga të dyja paketat', 'Mbulim i dyfishtë', 'Redaktim i koordinuar', '20% kursim'],
      popular: true
    },
    {
      id: 'engagement',
  name: 'Sesion Fejesë',
      price: '€000',
      description: 'Fotografi romantike para martesës',
  features: ['Sesion 2-orëshe', '50+ foto të redaktuara', 'Vende të shumta', 'Galeri online']
    },
    {
      id: 'elopement',
      name: 'Paketa Elopement',
      price: '€000',
      description: 'Mbulim intim për ceremoni private',
      features: ['Mbulim 4-6 orësh', '200+ foto të redaktuara', 'Vende të shumta', 'Parapamje e ditës']
    }
  ]

  const addOns = [
    { id: 'second-shooter', name: 'Fotograf i Dytë', price: '€450' },
    { id: 'drone', name: 'Mbulim me Dron', price: '€280' },
    { id: 'same-day', name: 'Parapamje e Ditës', price: '€180' },
    { id: 'album', name: 'Album Premium Fotosh', price: '€720' },
    { id: 'raw-photos', name: 'Foto të Papërpunuara', price: '€360' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {}
    
    if (step === 1) {
      if (!formData.eventType) newErrors.eventType = 'Lloji i eventit është i detyrueshëm'
      if (!formData.eventDate) newErrors.eventDate = 'Data e eventit është e detyrueshme'
      if (!formData.location) newErrors.location = 'Vendi është i detyrueshëm'
    } else if (step === 2) {
      if (!formData.firstName) newErrors.firstName = 'Emri është i detyrueshëm'
      if (!formData.lastName) newErrors.lastName = 'Mbiemri është i detyrueshëm'
      if (!formData.email) newErrors.email = 'Email është i detyrueshëm'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email nuk është i vlefshëm'
      if (!formData.phone) newErrors.phone = 'Numri i telefonit është i detyrueshëm'
    } else if (step === 3) {
      if (!formData.package) newErrors.package = 'Ju lutemi zgjidhni një paketë'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      addOns: checked 
        ? [...prev.addOns, addOnId]
        : prev.addOns.filter(id => id !== addOnId)
    }))
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setCurrentStep(5) // Success step
  }

  const steps = [
    { number: 1, title: 'Detajet e Eventit', icon: CalendarIcon },
    { number: 2, title: 'Informacioni i Kontaktit', icon: UserIcon },
    { number: 3, title: 'Zgjedhja e Paketës', icon: CheckCircleIcon },
    { number: 4, title: 'Rishikimi dhe Dërgimi', icon: EnvelopeIcon }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white py-16">
          <div className="container-custom text-center">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 text-gold-600 hover:text-gold-700 mb-6 mx-auto transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-800 mb-6"
            >
              Rezervoni <span className="text-gradient font-script text-5xl md:text-6xl">Sesionin</span> Tuaj
            </motion.h1>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto font-montserrat">
              Le të krijojmë kujtime të bukura së bashku. Plotësoni formularin më poshtë dhe do t'ju përgjigjemi brenda 24 orëve.
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white border-b border-cream-200">
          <div className="container-custom py-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-gold-500 border-gold-500 text-white'
                      : 'border-charcoal-300 text-charcoal-400'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className={`font-medium ${
                      currentStep >= step.number ? 'text-charcoal-800' : 'text-charcoal-400'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-gold-500' : 'bg-charcoal-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="py-16">
          <div className="container-custom max-w-4xl">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Event Details */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="card p-8"
                >
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-800 mb-6">
                    Na Tregoni Për Eventin Tuaj
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Lloji i Eventit *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className={`input-field ${errors.eventType ? 'border-red-500' : ''}`}
                      >
                        <option value="">Zgjidhni llojin e eventit</option>
                        <option value="wedding">Martesë</option>
                        <option value="engagement">Fejesim</option>
                        <option value="elopement">Elopement</option>
                        <option value="portrait">Sesion Portretesh</option>
                        <option value="other">Tjetër</option>
                      </select>
                      {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Data e Eventit *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                        className={`input-field ${errors.eventDate ? 'border-red-500' : ''}`}
                      />
                      {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Ora e Eventit
                      </label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Numri i Mysafirëve
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="">Zgjidhni numrin e mysafirëve</option>
                        <option value="1-50">1-50 mysafirë</option>
                        <option value="51-100">51-100 mysafirë</option>
                        <option value="101-200">101-200 mysafirë</option>
                        <option value="200+">200+ mysafirë</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                      Vendi i Eventit *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className={`input-field ${errors.location ? 'border-red-500' : ''}`}
                      placeholder="Emri i vendit, qyteti, shteti"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="card p-8"
                >
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-800 mb-6">
                    Informacioni Juaj i Kontaktit
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Emri *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                        placeholder="Emri juaj"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Mbiemri *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                        placeholder="Mbiemri juaj"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Adresa Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="email@shembull.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2 font-montserrat">
                        Numri i Telefonit *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="+355 69 123 4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Package Selection */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="card p-8">
                    <h2 className="font-playfair text-2xl font-bold text-charcoal-800 mb-6">
                      Zgjidhni Paketën Tuaj
                    </h2>
                    {errors.package && <p className="text-red-500 text-sm mb-4">{errors.package}</p>}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {packages.map((pkg) => (
                        <div
                          key={pkg.id}
                          className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.package === pkg.id
                              ? 'border-gold-500 bg-gold-50'
                              : 'border-cream-300 hover:border-gold-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, package: pkg.id }))}
                        >
                          {pkg.popular && (
                            <div className="absolute -top-3 left-6 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Most Popular
                            </div>
                          )}
                          
                          <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-2">
                            {pkg.name}
                          </h3>
                          <p className="text-2xl font-bold text-gold-600 mb-3">
                            {pkg.price}
                          </p>
                          <p className="text-charcoal-600 mb-4">
                            {pkg.description}
                          </p>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-charcoal-700">
                                <CheckCircleIcon className="w-4 h-4 text-gold-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="card p-8">
                    <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-6">
                      Shërbime Shtesë
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addOns.map((addOn) => (
                        <label key={addOn.id} className="flex items-center p-4 rounded-lg border border-cream-300 hover:bg-cream-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.addOns.includes(addOn.id)}
                            onChange={(e) => handleAddOnChange(addOn.id, e.target.checked)}
                            className="w-4 h-4 text-gold-500 border-cream-300 rounded focus:ring-gold-500"
                          />
                          <div className="ml-3 flex-1">
                            <p className="font-medium text-charcoal-800">{addOn.name}</p>
                            <p className="text-sm text-gold-600">{addOn.price}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="card p-8"
                >
                  <h2 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                    Review Your Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-charcoal-800 mb-3">Event Details</h3>
                      <div className="bg-cream-50 p-4 rounded-lg space-y-2">
                        <p><span className="font-medium">Type:</span> {formData.eventType}</p>
                        <p><span className="font-medium">Date:</span> {formData.eventDate}</p>
                        <p><span className="font-medium">Time:</span> {formData.eventTime || 'Not specified'}</p>
                        <p><span className="font-medium">Location:</span> {formData.location}</p>
                        <p><span className="font-medium">Guests:</span> {formData.guestCount || 'Not specified'}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-charcoal-800 mb-3">Contact Information</h3>
                      <div className="bg-cream-50 p-4 rounded-lg space-y-2">
                        <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                        <p><span className="font-medium">Email:</span> {formData.email}</p>
                        <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-charcoal-800 mb-3">Selected Package</h3>
                      <div className="bg-cream-50 p-4 rounded-lg">
                        <p className="font-medium">
                          {packages.find(p => p.id === formData.package)?.name} - 
                          {packages.find(p => p.id === formData.package)?.price}
                        </p>
                        {formData.addOns.length > 0 && (
                          <div className="mt-2">
                            <p className="font-medium">Add-ons:</p>
                            <ul className="list-disc list-inside text-sm">
                              {formData.addOns.map(addOnId => {
                                const addOn = addOns.find(a => a.id === addOnId)
                                return <li key={addOnId}>{addOn?.name} - {addOn?.price}</li>
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Special Requests or Questions
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Tell us about any special requests, questions, or additional details..."
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Success Step */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="card p-8 text-center"
                >
                  <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-12 h-12 text-gold-600" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-charcoal-800 mb-4">
                    Faleminderit!
                  </h2>
                  <p className="text-lg text-charcoal-600 mb-6 font-montserrat">
                    Kërkesa juaj për rezervim u dërgua me sukses. Do të rishikojmë informacionin tuaj dhe do t'ju përgjigjemi brenda 24 orëve me një ofertë të detajuar dhe hapat e ardhshëm.
                  </p>
                  <div className="space-y-4">
                    <p className="text-charcoal-700 font-montserrat">
                      <strong>Çfarë ndodh tjetër?</strong>
                    </p>
                    <ul className="text-left max-w-md mx-auto space-y-2 text-charcoal-600 font-montserrat">
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-gold-500 mr-2" />
                        Do të rishikojmë kërkesën tuaj dhe zgjedhjen e paketës
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-gold-500 mr-2" />
                        Do t'ju dërgojmë një ofertë të detajuar dhe kontratë
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-gold-500 mr-2" />
                        Do të planifikojmë një bisedë konsultimi për të diskutuar detajet
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-gold-500 mr-2" />
                        Do të konfirmojmë rezervimin tuaj dhe të fillojmë planifikimin
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-montserrat ${
                        currentStep === 1
                          ? 'bg-charcoal-200 text-charcoal-400 cursor-not-allowed'
                          : 'bg-charcoal-600 text-white hover:bg-charcoal-700'
                      }`}
                    >
                      Mëparshëm
                    </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                    >
                      Hapi Tjetër
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Duke Dërguar...</span>
                        </>
                      ) : (
                        <span>Dërgo Kërkesën për Rezervim</span>
                      )}
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

