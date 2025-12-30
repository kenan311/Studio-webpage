'use client'

import { motion } from 'framer-motion'
import { 
  CameraIcon, 
  VideoCameraIcon, 
  PhotoIcon, 
  HeartIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      icon: CameraIcon,
      title: 'Fotografi Martesore',
      description: 'Mbulim i plotë i ditës me fotografi artistike dhe spontane që kapin çdo emocion dhe detaj të ditës suaj të veçantë.',
      features: ['Mbulim 8-12 orësh', '500+ foto të redaktuara', 'Galeri online', 'Të drejta printimi'],
      price: 'Duke filluar nga €2,200'
    },
    {
      icon: VideoCameraIcon,
      title: 'Videografi Martesore',
      description: 'Filma martesore kinematografike që tregojnë historinë tuaj të dashurisë me redaktim profesional dhe muzikë.',
      features: ['Video përmbledhëse', 'Ceremoni e plotë', 'Mbulim feste', 'Video me dron'],
      price: 'Duke filluar nga €2,600'
    },
    {
      icon: PhotoIcon,
      title: 'Seanca Fejese',
      description: 'Fotografi romantike para martesës për të festuar dashurinë tuaj dhe për të krijuar karta të bukura të ftesës.',
  features: ['Sesion 2-orëshe', '50+ foto të redaktuara', 'Vende të shumta', 'Galeri online'],
      price: 'Duke filluar nga €350'
    },
    {
      icon: HeartIcon,
      title: 'Paketa Elopement',
      description: 'Mbulim intim dhe romantik për ceremoninë tuaj private me fokus në momente autentike.',
      features: ['Mbulim 4-6 orësh', '200+ foto të redaktuara', 'Vende të shumta', 'Parapamje e ditës'],
      price: 'Duke filluar nga €1,000'
    },
    {
      icon: ClockIcon,
      title: 'Mbulim Orësh',
      description: 'Tarifa fleksibile orësh për ceremoni, festa, ose çdo moment të veçantë që dëshironi të kapni.',
      features: ['Minimum 2 orë', 'Redaktim profesional', 'Dorëzim i shpejtë', 'Dorëzim online'],
      price: 'Duke filluar nga €250/orë'
    },
    {
      icon: UserGroupIcon,
      title: 'Portrete Familjare',
      description: 'Seanca të bukura fotografike familjare për fejesime, shtatzëni, ose festime të rëndësishme.',
  features: ['Sesion 1-2 orëshe', '30+ foto të redaktuara', 'Pozicione të shumta', 'Galeri online'],
      price: 'Duke filluar nga €300'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
            <span className="text-gradient">Shërbimet</span> Tona
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto font-montserrat">
            Nga elopement intim deri te festimet e mëdha, ofrojmë paketa gjithëpërfshirëse fotografike dhe videografike të përshtatura për historinë tuaj unike të dashurisë.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-gold-600" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-charcoal-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-charcoal-600 mb-6 text-center leading-relaxed font-montserrat">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-charcoal-700 font-montserrat">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-600 mb-4 font-playfair">
                  {service.price}
                </p>
                <button 
                  className="btn-primary w-full"
                  onClick={() => window.location.href = '/book'}
                >
                  Rezervo Tani
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-charcoal-600 mb-6 font-montserrat">
            Nuk shikoni saktësisht atë që kërkoni? Do të na pëlqente të krijonim një paketë të personalizuar vetëm për ju.
          </p>
          <button 
            className="btn-secondary"
            onClick={() => window.location.href = '/#contact'}
          >
            Merr Ofertë të Personalizuar
          </button>
        </motion.div>
      </div>
    </section>
  )
}
