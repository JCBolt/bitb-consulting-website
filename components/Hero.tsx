'use client'

import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      {/* Abstract decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blob top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        {/* Gradient blob bottom left */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        {/* Diagonal accent line */}
        <div className="absolute top-1/4 right-0 w-64 h-1 accent-line opacity-40 transform rotate-45" />
        <div className="absolute bottom-1/3 left-10 w-32 h-1 accent-line opacity-30 transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center pt-20">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your business is full of smart people, but something structural is costing you momentum.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-dark-500 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          You&apos;re doing the work, but you can feel the friction.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-dark-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I find the hidden drag and fix it. No theatre, no jargon, no blame.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            href="https://calendly.com/jbolt-bitbconsulting/30min"
            variant="primary"
            size="lg"
          >
            Book a diagnostic call
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-3 bg-dark-300 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
