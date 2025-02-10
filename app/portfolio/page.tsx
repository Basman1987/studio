"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const portfolioItems = [
  { id: 1, title: "Memecoin Logo 1", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, title: "X Banner 1", image: "/placeholder.svg?height=300&width=600" },
  { id: 3, title: "Marketing Poster 1", image: "/placeholder.svg?height=400&width=300" },
  { id: 4, title: "Memecoin Logo 2", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, title: "X Banner 2", image: "/placeholder.svg?height=300&width=600" },
  { id: 6, title: "Marketing Poster 2", image: "/placeholder.svg?height=400&width=300" },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 cyberpunk-text-glow gradient-text"
      >
        Our Portfolio
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cyberpunk-glow"
          >
            <div className="relative aspect-square">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 cyberpunk-text-glow">{item.title}</h3>
              <p className="text-gray-400">Click to view details</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

