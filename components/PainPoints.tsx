'use client'

import { AlertCircle, CalendarX, Clock, TrendingDown, UserMinus, DollarSign } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Card from './ui/Card'

const frictionSigns = [
  {
    icon: AlertCircle,
    title: 'Stalled initiatives',
    description: 'Projects that lose momentum halfway through, despite everyone working hard.',
  },
  {
    icon: CalendarX,
    title: 'Priority proliferation',
    description: 'Too many priorities competing for attention, with nothing truly finishing.',
  },
  {
    icon: Clock,
    title: 'Slow decisions',
    description: 'Conversations where something important goes unsaid, and decisions lack teeth.',
  },
]

const seriousImpact = [
  {
    icon: DollarSign,
    title: 'Missed revenue targets',
  },
  {
    icon: TrendingDown,
    title: 'Customer churn',
  },
  {
    icon: UserMinus,
    title: 'Employee retention challenges',
  },
]

export default function PainPoints() {
  return (
    <SectionWrapper background="light">
      <div className="text-center mb-10">
        <p className="text-lg text-dark-500 max-w-2xl mx-auto">
          Friction in your business has a serious cost.
        </p>
      </div>

      {/* How friction shows up */}
      <div className="mb-12">
        <p className="text-center text-sm font-medium text-dark-400 uppercase tracking-wide mb-6">
          How it shows up
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {frictionSigns.map((point, index) => (
            <Card key={index} className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">{point.title}</h3>
              <p className="text-dark-500">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* The serious impact */}
      <div className="mb-12">
        <p className="text-center text-sm font-medium text-dark-400 uppercase tracking-wide mb-6">
          The real impact
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {seriousImpact.map((impact, index) => (
            <Card key={index} className="text-center bg-accent-50 border border-accent-200">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-6 h-6 text-accent-700" />
              </div>
              <h3 className="text-lg font-semibold text-dark">{impact.title}</h3>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-dark-600 max-w-2xl mx-auto">
          Your business is full of smart, capable people, but somehow still stuck.
          Not because anyone&apos;s lazy or incompetent, but because something structural
          is off and no one can quite name it.
        </p>
      </div>
    </SectionWrapper>
  )
}
