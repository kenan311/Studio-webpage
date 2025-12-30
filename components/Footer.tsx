'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Fotografi Martesore', href: '#services' },
      { name: 'Videografi Martesore', href: '#services' },
      { name: 'Seanca Fejese', href: '#services' },
      { name: 'Paketa Elopement', href: '#services' },
      { name: 'Portrete Familjare', href: '#services' }
    ],
    company: [
      { name: 'Rreth Nesh', href: '#about' },
      { name: 'Ekipi Ynë', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Dëshmitë', href: '#testimonials' },
      { name: 'Kontakti', href: '#contact' }
    ],
    resources: [
      { name: 'Udhëzues Planifikimi', href: '#' },
      { name: 'Këshilla Fotografike', href: '#' },
      { name: 'Udhëzues Çmimesh', href: '#' },
      { name: 'Pyetje të Shpeshta', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Pinterest', href: '#', icon: '📌' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ]

  return (
    <footer className="bg-charcoal-800 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="font-luxury text-2xl font-bold">
                  Studio Martesore
                </span>
              </Link>
              
              <p className="text-charcoal-300 mb-6 leading-relaxed">
                Kapim momentet tuaja të përjetshme me elegancë, art dhe pasion. 
                Shërbime profesionale fotografike dhe videografike martesore.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-charcoal-300">
                  <EnvelopeIcon className="w-5 h-5 text-gold-500" />
                  <span>hello@studiomartesore.com</span>
                </div>
                <div className="flex items-center space-x-3 text-charcoal-300">
                  <PhoneIcon className="w-5 h-5 text-gold-500" />
                  <span>+355 69 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-charcoal-300">
                  <MapPinIcon className="w-5 h-5 text-gold-500" />
                  <span>Tirana, Shqipëri</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-luxury text-xl font-bold mb-6">Shërbimet</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-charcoal-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-luxury text-xl font-bold mb-6">Kompania</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-charcoal-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-luxury text-xl font-bold mb-6">Burimet</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-charcoal-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-charcoal-700 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-charcoal-300 font-medium">Na Ndiqni:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-charcoal-700 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-charcoal-300 font-medium">Mbani të Përditësuar:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Shkruani email-in tuaj"
                  className="px-4 py-2 bg-charcoal-700 border border-charcoal-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white placeholder-charcoal-400"
                />
                <button className="px-6 py-2 bg-gold-500 hover:bg-gold-600 rounded-r-lg transition-colors duration-300 font-medium">
                  Abonohu
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-charcoal-700 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-charcoal-400">
              <span>© {currentYear} Studio Martesore. Të gjitha të drejtat e rezervuara.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="#"
                className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300"
              >
                Politika e Privatësisë
              </Link>
              <Link
                href="#"
                className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300"
              >
                Kushtet e Shërbimit
              </Link>
              <Link
                href="#"
                className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300"
              >
                Politika e Cookies
              </Link>
            </div>
          </div>
          
          {/* Made with Love */}
          <div className="flex items-center justify-center mt-4 pt-4 border-t border-charcoal-700">
            <p className="text-charcoal-400 text-sm flex items-center space-x-2">
              <span>Krijuar me</span>
              <HeartIcon className="w-4 h-4 text-gold-500" />
              <span>për çifte në dashuri</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
