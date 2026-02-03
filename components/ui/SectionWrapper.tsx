'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: 'white' | 'light' | 'teal' | 'dark'
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  background = 'white',
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    teal: 'bg-primary-50',
    dark: 'bg-dark text-white',
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding ${backgrounds[background]} ${className}`}
    >
      <motion.div
        className="container-max"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
