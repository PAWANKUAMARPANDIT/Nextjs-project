"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'  // Import Link from next/link

export function HeroSection() {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-gradient-x overflow-hidden">
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-gradient-x overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6"
          >
            {/* Text Content */}
            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Pawan Kuamar Pandit
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl leading-relaxed"
              >
                Crafting beautiful digital experiences through clean code and intuitive design. 
                Specializing in modern web applications and creative solutions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4"
              >
                {/* Link for View Projects */}
                <Link 
                  href="https://github.com/PAWANKUAMARPANDIT"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  View Projects
                </Link>

                {/* Link for Contact Me */}
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-white hover:bg-purple-500/20 transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>

              {/* Tech Stack */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-6 text-gray-400"
              >
                <div className="hover:text-purple-400 transition-colors duration-300">React</div>
                <div className="hover:text-purple-400 transition-colors duration-300">Next.js</div>
                <div className="hover:text-purple-400 transition-colors duration-300">TypeScript</div>
                <div className="hover:text-purple-400 transition-colors duration-300">Tailwind</div>
              </motion.div>
            </div>

            {/* Image/Avatar Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl transform hover:scale-105 transition-all duration-500" />
              {/* Add your image here */}
              <Image
                src="/profile.jpg" // Add your image path
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
