'use client'

import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-gray-400 py-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="BITB Consulting"
              className="h-10 w-auto"
            />
          </div>

          {/* Contact links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:jbolt@bitbconsulting.ca"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">jbolt@bitbconsulting.ca</span>
            </a>
            <a
              href="https://linkedin.com/in/joannecbolt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} BITB Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
