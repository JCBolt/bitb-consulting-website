'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'

export default function BeyondWork() {
  return (
    <SectionWrapper background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Beyond the Work
          </h2>

          {/* Book feature */}
          <div className="bg-accent-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="text-sm text-dark-500 ml-2">4.8 on Amazon</span>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">
              The Good Girl is Burned Out
            </h3>
            <p className="text-dark-600">
              I wrote and published a book about burnout, good-girl conditioning, and how I
              rebuilt my relationship with work and ambition. Writing it fundamentally changed
              how I lead and how I design environments where people can do meaningful work
              with joy, without burning out.
            </p>
          </div>

          {/* Personal touches */}
          <div className="space-y-4 text-dark-600">
            <p>
              In 2024–2025, my family and I lived for a year in an eco-village in Bali while
              our kids attended Green School. It was an expansive, uncomfortable, rewarding
              experience, and it continues to shape how I think about systems, sustainability,
              and what &ldquo;enough&rdquo; actually looks like.
            </p>
            <p>
              I&apos;m a board member of a youth-focused, nature-based organisation, and I mentor
              a recent graduate in Kenya as she navigates her first steps into professional life.
            </p>
          </div>

          {/* Back in Vancouver */}
          <div className="mt-6">
            <p className="text-dark-600 mb-3">Back in Vancouver now, I love:</p>
            <ul className="space-y-2 text-dark-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Spending time in the forest or skiing in the mountains
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Facilitating the lives of my two kids (12 and 9)
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Using our back garden sauna
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Reading fiction, dancing hip hop, or learning to play the drums
              </li>
            </ul>
          </div>
        </div>

        {/* Book cover */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-lg transform rotate-3" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-lg transform -rotate-2" />
            {/* Book image */}
            <div className="relative w-64 md:w-72 aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/book-cover.jpg"
                alt="The Good Girl is Burned Out book cover"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
