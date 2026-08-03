'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <footer className="relative overflow-hidden border-t border-gray-800">
      {/* Background with scenic image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488559887577-b4baf00c925f?w=1920&h=1080&fit=crop")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

      {/* Animated background orb */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Newsletter */}
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 mb-12 border border-blue-600/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Stay Updated
            </motion.h3>
            <motion.p
              className="text-white/90 mb-6"
              variants={itemVariants}
            >
              Subscribe to our newsletter for exclusive deals, travel tips, and inspiration
            </motion.p>
            <motion.form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              variants={itemVariants}
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                }}
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10"
                  animate={subscribed ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {subscribed ? '✓' : 'Subscribe'}
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ✈️ JettTime
            </motion.div>
            <p className="text-gray-400 mb-6">
              Making world travel accessible and unforgettable for everyone.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {['📘', '𝕏', '📷', '💼'].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg">{icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {[
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Blog', 'Press']
            },
            {
              title: 'Services',
              links: ['Destinations', 'Packages', 'Visa Assistance', 'Travel Insurance']
            },
            {
              title: 'Support',
              links: ['FAQ', 'Contact Us', 'Booking Help', 'Cancellation Policy']
            }
          ].map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © 2024 JettTime. All rights reserved. Made with ❤️
          </motion.p>

          {/* Payment & Security Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-gray-400 text-sm">Secure & Verified</span>
            <div className="flex gap-3">
              {['🔒', '✓', '⭐'].map((icon, i) => (
                <motion.span
                  key={i}
                  className="text-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Policy Links */}
          <motion.div
            variants={itemVariants}
            className="flex space-x-6 text-sm"
          >
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
