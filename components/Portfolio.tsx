'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'Të Gjitha' },
    { id: 'weddings', name: 'Martesa' },
    { id: 'engagements', name: 'Fejesime' },
    { id: 'elopements', name: 'Elopement' },
    { id: 'portraits', name: 'Portrete' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'xxx & xxx',
      location: 'Vlorë, Shqipëri',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Martesë romantike në bregdet me portrete në orën e artë'
    },
    {
      id: 2,
      category: 'engagements',
      title: 'xxx & xxx',
      location: 'Tirana, Shqipëri',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description: 'Sesion fejesë urbane me sfondin e qytetit'
    },
    {
      id: 3,
      category: 'elopements',
      title: 'xxx & xxx',
      location: 'Podujevë, Kosovë',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elopement intim në mal me pamje të bukura'
    },
    {
      id: 4,
      category: 'weddings',
      title: 'xxx & xxx',
      location: 'Prizren, Kosovë',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Martesë destinacioni në qytetin e muzeve'
    },
    {
      id: 5,
      category: 'portraits',
      title: 'Familja xxx',
      location: 'Pejë, Kosovë',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description: 'Sesion portretesh familjare me ngjyra vjeshtore'
    },
    {
      id: 6,
      category: 'engagements',
      title: 'xxx & xxx',
      location: 'Prishtinë, Kosovë',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description: 'Sesion fejesë me pamje të mrekullueshme të perëndimit'
    },
    {
      id: 7,
      category: 'weddings',
      title: 'xxx & xxx',
      location: 'Korça, Shqipëri',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Martesë malore me elegancë rustike'
    },
    {
      id: 8,
      category: 'elopements',
      title: 'xxx & xxx',
      location: 'Lipjan, Kosovë',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elopement në natyrë nën yjet'
    },
    {
      id: 9,
      category: 'portraits',
  title: 'Sesion Shtatzënie',
      location: 'Shëngjin, Shqipërië',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description: 'Sesion shtatzënie në plazh me dritë të artë'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="section-padding bg-cream-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
            <span className="text-gradient">Portfolio</span> Jonë
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto font-montserrat">
            Çdo histori dashurie është unike. Ja një pamje e momenteve të bukura që kemi pasur privilegjin të kapim.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-charcoal-700 hover:bg-gold-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => {
                  // Navigate to gallery page with item ID
                  window.location.href = `/gallery/${item.id}`
                }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-1 font-montserrat">{item.location}</p>
                      <p className="text-sm opacity-80 mb-3 font-montserrat">{item.description}</p>
                      <button className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 font-montserrat">
                        Shiko Galerinë
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button 
            className="btn-secondary"
            onClick={() => window.location.href = '/gallery/1'}
          >
            Shiko Portfolio të Plotë
          </button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
