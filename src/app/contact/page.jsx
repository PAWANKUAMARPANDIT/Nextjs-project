"use client"
import { useState } from 'react'
import { motion } from 'framer-motion' 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(formData) 

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x z-30">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" 
        >
          {/* Contact Info Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:rotate-3 transition-all duration-300 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Talk</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Business Avenue, City, Country</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 transform hover:-rotate-3 transition-all duration-300 shadow-2xl mt-8" // Added mt-8 here to move down
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your Name"
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="your@email.com"
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 h-32"
                  placeholder="Your message here..."
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
