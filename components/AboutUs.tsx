'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🎯',
    title: 'Curated Experiences',
    description: 'Handpicked destinations and activities tailored to your preferences',
  },
  {
    icon: '🛡️',
    title: 'Secure Booking',
    description: '24/7 support and guaranteed safety for all your bookings',
  },
  {
    icon: '💰',
    title: 'Best Prices',
    description: 'Competitive rates with exclusive deals and discounts',
  },
  {
    icon: '🌍',
    title: 'Global Network',
    description: 'Partner with local guides in over 150 destinations worldwide',
  },
  {
    icon: '⚡',
    title: 'Instant Booking',
    description: 'Quick and easy booking process with instant confirmation',
  },
  {
    icon: '🎁',
    title: 'Loyalty Rewards',
    description: 'Earn points and get exclusive rewards with every trip',
  },
]

const stats = [
  { value: '8+', label: 'Years of Excellence' },
  { value: '50K+', label: 'Happy Travelers' },
  { value: '150+', label: 'Destinations' },
  { value: '4.9★', label: 'Average Rating' }
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, rotateX }}
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-600 transition-colors duration-300 h-full"
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
          borderColor: "#3b82f6"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="text-6xl mb-4 inline-block"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }}
          whileHover={{
            scale: 1.3,
            rotate: 20
          }}
        >
          {feature.icon}
        </motion.div>
        <motion.h3
          className="text-xl font-bold text-white mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {feature.description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default function AboutUs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background with scenic travel image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Animated background orb */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose JettTime?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We make world travel accessible, affordable, and unforgettable for everyone
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.4 + index * 0.1
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
              }}
            >
              <motion.div
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
