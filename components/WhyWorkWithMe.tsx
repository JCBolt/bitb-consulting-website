'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'

const outcomes = [
  'False alignment becomes visible',
  'Real trade-offs appear',
  'Work-in-progress drops because decisions finally have teeth',
]

export default function WhyWorkWithMe() {
  return (
    <SectionWrapper id="about" background="light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Headshot */}
        <div className="relative order-2 md:order-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3" />
            <div className="absolute inset-0 bg-accent/20 rounded-2xl transform -rotate-3" />
            <Image
              src="/headshot.jpg"
              alt="Jo Bolt"
              fill
              className="object-cover rounded-2xl relative z-10"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Why Work With Me
          </h2>

          <div className="space-y-4 text-dark-600 mb-6">
            <p className="text-lg font-medium text-dark">
              I see and say what most teams step around.
            </p>
            <p>
              I read rooms exceptionally well, which means I notice the things others
              politely ignore. Not just what&apos;s being said, but what can&apos;t be said without risk.
            </p>
            <p>
              I&apos;m wired to keep asking questions past when it gets uncomfortable, until
              I understand. This surfaces the constraint the system is quietly protecting.
            </p>
          </div>

          <p className="text-dark-600 font-medium mb-3">When that happens:</p>
          <ul className="space-y-2 mb-6">
            {outcomes.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-dark-600">{item}</span>
              </li>
            ))}
          </ul>

          {/* Pull quote */}
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent mb-6">
            <p className="text-lg text-dark italic">
              &ldquo;Teams usually realize they haven&apos;t had a delivery problem.
              They&apos;ve had a clarity problem.&rdquo;
            </p>
          </div>

          <p className="text-dark-600">
            With clarity, the system stops asking people to do contradictory things.
            Leadership time stops burning and starts creating momentum.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
