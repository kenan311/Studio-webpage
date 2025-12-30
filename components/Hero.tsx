'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('services')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-cream-500/20"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-lora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-800 mb-6 text-shadow"
          >
            Kapim Momentet Tuaja
            <span className="block text-gradient font-lora text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Të Përjetshme</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-charcoal-600 mb-8 max-w-2xl mx-auto leading-relaxed font-source-sans"
          >
            Shërbime profesionale fotografike dhe videografike që e transformojnë ditën tuaj të veçantë në kujtime të përjetshme
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book"
              className="btn-primary text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Rezervo Sesionin
            </Link>
            <Link
              href="#portfolio"
              className="btn-secondary text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Shiko Punën Tonë
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
      >
        <ChevronDownIcon className="w-6 h-6 text-charcoal-700 animate-bounce" />
      </motion.button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-200/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-cream-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-sage-200/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}
