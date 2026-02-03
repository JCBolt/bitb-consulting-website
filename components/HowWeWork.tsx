'use client'

import { Search, Briefcase, UserCheck } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Card from './ui/Card'

const engagementTypes = [
  {
    icon: Search,
    title: 'Diagnostic',
    duration: '2–4 weeks',
    description: 'I come in, identify the constraint, map the cost, and give you a clear path forward.',
  },
  {
    icon: Briefcase,
    title: 'Strategic Project',
    duration: '3–6 months',
    description: 'You need something complex designed and delivered: platform migrations, cross-functional realignment, delivery system rebuilds.',
  },
  {
    icon: UserCheck,
    title: 'Fractional Leadership',
    duration: 'Ongoing',
    description: 'I step in as fractional Chief of Staff or fill a gap in tech, product, or delivery leadership until you\'re stable or hired.',
  },
]

export default function HowWeWork() {
  return (
    <SectionWrapper id="work-with-me" background="teal">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
          How We Work Together
        </h2>
        <p className="text-lg text-dark-600 max-w-2xl mx-auto">
          Most engagements begin with a short diagnostic conversation to confirm fit, scope, and investment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {engagementTypes.map((type, index) => (
          <Card key={index} className="bg-white">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <type.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="inline-block px-3 py-1 bg-accent/20 text-accent-700 text-sm font-medium rounded-full mb-3">
              {type.duration}
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">{type.title}</h3>
            <p className="text-dark-500">{type.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-dark-600">
          I offer fixed-price projects for defined initiatives and retainers for strategic partnership.
        </p>
      </div>
    </SectionWrapper>
  )
}
