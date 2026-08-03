'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SearchBar() {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: '2',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', formData)
  }

  return (
    <div className="relative -mt-20 z-20 max-w-6xl mx-auto px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 backdrop-blur-xl border border-gray-200"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
        }}
      >
        <motion.h3 
          className="text-3xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Find Your Perfect Trip
        </motion.h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📍 Destination
              </label>
              <motion.input
                type="text"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder="Where to?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 transition-all duration-300"
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
              />
            </motion.div>

            {/* Check In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📅 Check In
              </label>
              <motion.input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 transition-all duration-300"
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
              />
            </motion.div>

            {/* Check Out */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📅 Check Out
              </label>
              <motion.input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 transition-all duration-300"
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
              />
            </motion.div>

            {/* Travelers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                👥 Travelers
              </label>
              <motion.select
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 transition-all duration-300"
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </motion.select>
            </motion.div>
          </div>

          <motion.button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="relative z-10 flex items-center justify-center gap-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍 Search Amazing Trips
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
