'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const packages = [
  {
    id: 1,
    name: 'Southeast Asia Explorer',
    duration: '14 Days',
    price: 107917,
    originalPrice: 149417,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=800&h=600&fit=crop',
    destinations: ['Thailand', 'Vietnam', 'Cambodia'],
    highlights: ['Temple tours', 'Beach resorts', 'Local cuisine', 'Island hopping'],
    badge: '28% OFF',
  },
  {
    id: 2,
    name: 'European Grand Tour',
    duration: '21 Days',
    price: 182517,
    originalPrice: 248917,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    destinations: ['France', 'Italy', 'Spain'],
    highlights: ['Historic sites', 'Art museums', 'Culinary tours', 'Wine tasting'],
    badge: '27% OFF',
  },
  {
    id: 3,
    name: 'Tropical Paradise',
    duration: '10 Days',
    price: 74617,
    originalPrice: 107917,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    destinations: ['Maldives', 'Bali'],
    highlights: ['Luxury resorts', 'Water sports', 'Diving', 'Spa treatments'],
    badge: 'BEST DEAL',
  },
  {
    id: 4,
    name: 'Japanese Cultural Immersion',
    duration: '16 Days',
    price: 132717,
    originalPrice: 174217,
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a1?w=800&h=600&fit=crop',
    destinations: ['Tokyo', 'Kyoto', 'Osaka'],
    highlights: ['Tea ceremonies', 'Temple visits', 'Traditional crafts', 'Sushi making'],
    badge: '24% OFF',
  },
  {
    id: 5,
    name: 'African Safari Adventure',
    duration: '12 Days',
    price: 149417,
    originalPrice: 207417,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=800&h=600&fit=crop',
    destinations: ['Kenya', 'Tanzania'],
    highlights: ['Wildlife safari', 'Hot air balloon', 'Masai villages', 'Photography'],
    badge: '28% OFF',
  },
  {
    id: 6,
    name: 'Caribbean Cruise Escape',
    duration: '7 Days',
    price: 66317,
    originalPrice: 99517,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    destinations: ['Bahamas', 'Turks & Caicos', 'Jamaica'],
    highlights: ['Cruise ship', 'Beach clubs', 'Water activities', 'Island dining'],
    badge: '33% OFF',
  },
]

function PackageCard({ pkg, index }: { pkg: typeof packages[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Badge */}
          {pkg.badge && (
            <motion.div
              className="absolute top-4 right-4 z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                {pkg.badge}
              </span>
            </motion.div>
          )}

          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
              style={{ y }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <motion.div 
              className="flex items-center text-blue-400 text-sm mb-2"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <span>⏱️ {pkg.duration}</span>
            </motion.div>

            <motion.h3 
              className="text-xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {pkg.name}
            </motion.h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {pkg.destinations.map((dest, i) => (
                <motion.span
                  key={dest}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                >
                  {dest}
                </motion.span>
              ))}
            </div>

            <ul className="space-y-2 mb-6">
              {pkg.highlights.slice(0, 3).map((highlight, i) => (
                <motion.li 
                  key={highlight} 
                  className="text-sm text-gray-400 flex items-center"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 + i * 0.05 }}
                >
                  <span className="text-green-400 mr-2">✓</span>
                  {highlight}
                </motion.li>
              ))}
            </ul>

            <div className="flex items-baseline justify-between mb-4">
              <div>
                <motion.span 
                  className="text-gray-500 line-through text-sm mr-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  ₹{pkg.originalPrice.toLocaleString('en-IN')}
                </motion.span>
                <motion.span 
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.7 }}
                >
                  ₹{pkg.price.toLocaleString('en-IN')}
                </motion.span>
              </div>
            </div>

            <motion.button 
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Back of card (hover state) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 flex flex-col justify-center items-center text-white"
          style={{ 
            backfaceVisibility: "hidden",
            rotateY: 180,
          }}
        >
          <h4 className="text-2xl font-bold mb-4">Full Itinerary</h4>
          <ul className="space-y-2">
            {pkg.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center">
                <span className="mr-2">✓</span>
                {highlight}
              </li>
            ))}
          </ul>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-full font-bold">
            View Details →
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function TravelPackages() {
  return (
    <section id="packages" className="py-20 relative overflow-hidden">
      {/* Background with mountain/travel scene */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
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
            Travel Packages
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from our handpicked travel packages designed for unforgettable experiences
          </motion.p>
          <motion.p 
            className="text-sm text-purple-400 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ✨ Hover over cards to see full details
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}