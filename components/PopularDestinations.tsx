'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
    description: 'Tropical paradise with stunning beaches',
    rating: 4.9,
    reviews: 2847,
    price: 'From $899',
  },
  {
    id: 2,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    description: 'City of lights and timeless romance',
    rating: 4.8,
    reviews: 3456,
    price: 'From $1,299',
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a1?w=800&h=600&fit=crop',
    description: 'Blend of tradition and technology',
    rating: 4.9,
    reviews: 2923,
    price: 'From $1,199',
  },
  {
    id: 4,
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
    description: 'The city that never sleeps',
    rating: 4.7,
    reviews: 3128,
    price: 'From $999',
  },
  {
    id: 5,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
    description: 'White-washed buildings and sunsets',
    rating: 4.9,
    reviews: 3782,
    price: 'From $1,099',
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453475888-a2a212bada1d?w=800&h=600&fit=crop',
    description: 'Luxury and modern architecture',
    rating: 4.8,
    reviews: 2654,
    price: 'From $1,399',
  },
]

function DestinationCard({ dest, index }: { dest: typeof destinations[0], index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Image with parallax */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
            style={{ y }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating badge */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
          >
            Popular
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-2"
            whileHover={{ x: 10 }}
          >
            {dest.name}
          </motion.h3>
          <p className="text-gray-400 mb-4">{dest.description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                >
                  ★
                </motion.span>
              ))}
              <span className="text-white font-semibold ml-2">{dest.rating}</span>
              <span className="text-gray-400 text-sm">({dest.reviews})</span>
            </div>
            <motion.div 
              className="text-blue-400 font-bold"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {dest.price}
            </motion.div>
          </div>

          <motion.button 
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore →</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function PopularDestinations() {
  return (
    <section id="destinations" className="py-20 relative overflow-hidden">
      {/* Background with beach scene */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated background orb */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
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
            Popular Destinations
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the most sought-after destinations chosen by thousands of travelers
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
