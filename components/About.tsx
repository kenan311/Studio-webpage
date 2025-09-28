'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  CameraIcon, 
  StarIcon,
  TrophyIcon,
  UsersIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function About() {
  const stats = [
    { icon: HeartIcon, number: '500+', label: 'Çifte të Shërbyera' },
    { icon: CameraIcon, number: '50K+', label: 'Foto të Kapura' },
    { icon: StarIcon, number: '5.0', label: 'Vlerësim Mesatar' },
    { icon: TrophyIcon, number: '15+', label: 'Çmime të Fituara' }
  ]

  const values = [
    {
      title: 'Tregim Autentik',
      description: 'Ne besojmë në kapjen e emocioneve të vërteta dhe momenteve reale që reflektojnë historinë tuaj unike të dashurisë.',
      icon: HeartIcon
    },
    {
      title: 'Ekselencë Artistike',
      description: 'Çdo imazh është krijuar me vëmendje ndaj detajeve, kompozimit dhe vizionit artistik.',
      icon: CameraIcon
    },
    {
      title: 'Lidhje Personale',
      description: 'Ne ndërtojmë marrëdhënie me çiftet tona për të siguruar rehati dhe besim gjatë gjithë procesit.',
      icon: UsersIcon
    },
    {
      title: 'Cilësi e Përjetshme',
      description: 'Puna jonë është projektuar për t\'u dashuruar për breza, me estetikë klasike dhe elegante.',
      icon: ClockIcon
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
            Rreth <span className="text-gradient">Studios Sonë</span>
          </h2>
          <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
            Me mbi një dekadë përvojë në fotografi dhe videografi martesore, ne specializohemi në krijimin e 
            kujtimeve të përjetshme që kapin thelbin e historisë suaj të dashurisë. Ekipi ynë i artistëve të 
            pasionuar kombinon ekspertizën teknike me vizionin krijues për të ofruar rezultate të jashtëzakonshme.
          </p>
          <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
            E kuptojmë që dita juaj e martesës është një nga ditët më të rëndësishme të jetës suaj. Kjo është arsyeja 
            pse i qasemi çdo seance me dedikim, profesionalizëm dhe një vlerësim të thellë për momentet e bukura 
            që kemi privilegjin t'i dëshmojmë dhe t'i ruajmë.
          </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Takohu Ekipin Tonë
              </button>
              <button className="btn-secondary">
                Shiko Procesin Tonë
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a4bc5c1a4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Photography Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal-800">5.0</p>
                  <p className="text-sm text-charcoal-600">Average Rating</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-600">
                "Absolutely incredible work! They captured every moment perfectly."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gold-600" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-2">
                {stat.number}
              </p>
              <p className="text-charcoal-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="font-luxury text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
            <span className="text-gradient">Vlerat</span> Tona
          </h3>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-12">
            Këto parime themelore udhëheqin gjithçka që bëjmë, duke siguruar që çdo çift të marrë 
            shërbim të jashtëzakonshëm dhe kujtime të bukura që zgjasin një jetë.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mx-auto mb-6">
                <value.icon className="w-8 h-8 text-gold-600" />
              </div>
              <h4 className="font-luxury text-xl font-bold text-charcoal-800 mb-4">
                {value.title}
              </h4>
              <p className="text-charcoal-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
