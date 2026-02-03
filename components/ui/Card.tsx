'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-md p-6 ${className}`}
      whileHover={hover ? { y: -4, shadow: '0 20px 40px rgba(0,0,0,0.1)' } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
