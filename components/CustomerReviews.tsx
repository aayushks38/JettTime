'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Bali, Indonesia',
    rating: 5,
    text: 'JettTime made our Bali trip absolutely unforgettable! The itinerary was perfectly planned, and every moment felt magical.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Paris, France',
    rating: 5,
    text: 'The Paris package exceeded all expectations. We visited hidden gems that most tourists never see. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'My first trip to Tokyo was perfectly orchestrated. From traditional temples to modern districts, everything was seamless!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    date: '3 weeks ago',
  },
]

function ReviewCard({ review, index }: { review: typeof reviews[0], index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity, scale }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-600 h-full backdrop-blur-sm"
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
          scale: 1.02
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Star Rating */}
        <div className="flex space-x-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <motion.span
              key={i}
              className="text-yellow-400 text-2xl"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.15 + 0.2 + i * 0.1
              }}
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* Review Text */}
        <motion.p
          className="text-gray-300 mb-6 leading-relaxed italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          "{review.text}"
        </motion.p>

        {/* Author */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.6 }}
        >
          <motion.img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
            whileHover={{ scale: 1.2 }}
          />
          <div>
            <motion.div 
              className="font-semibold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.7 }}
            >
              {review.name}
            </motion.div>
            <motion.div 
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.8 }}
            >
              {review.location}
            </motion.div>
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          className="mt-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.9 }}
        >
          {review.date}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function CustomerReviews() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with travel/scenic image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Animated background orb */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
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
            What Our Travelers Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Read heartfelt testimonials from thousands of satisfied travelers
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: '50K+', label: 'Happy Travelers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '150+', label: 'Destinations' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-600/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.5 + i * 0.15
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.3)"
              }}
            >
              <motion.div
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
