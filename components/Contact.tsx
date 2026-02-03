'use client'

import { Calendar } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Button from './ui/Button'

export default function Contact() {
  return (
    <SectionWrapper id="contact" background="dark">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to feel the flow again?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          If you want a partner who gets in the boat with you and helps you row in the
          right direction, the first step is usually a short diagnostic conversation.
        </p>

        <Button
          href="https://calendly.com/jbolt-bitbconsulting/30min"
          variant="secondary"
          size="lg"
          className="inline-flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Book a call
        </Button>
      </div>
    </SectionWrapper>
  )
}
