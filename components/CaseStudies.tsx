'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, TrendingUp, Zap, Users, Target, Wrench } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'

interface CaseStudy {
  id: string
  icon: React.ElementType
  headline: string
  summary: string
  expandedContent?: React.ReactNode
}

const mainCaseStudies: CaseStudy[] = [
  {
    id: 'invisible-drag',
    icon: Zap,
    headline: 'A $2M Team Trapped in Invisible Drag',
    summary: 'Brought in to "build some product processes", diagnosed a team losing 30–40% of their capacity to structural drag.',
    expandedContent: (
      <div className="space-y-4 text-dark-600">
        <div>
          <h4 className="font-semibold text-dark mb-2">What I actually found</h4>
          <p>
            A ~$2M delivery team that was busy and committed, but was losing an estimated
            30–40% of its capacity to structural drag. Not because people weren&apos;t trying, but
            because the system made consistency impossible.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-dark mb-2">The constraint I named</h4>
          <p>
            There were no stable, shared priorities nor clear dependency mapping before starting
            an initiative. Without a clear planning horizon or explicit trade-offs, teams were
            constantly context-switching.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-dark mb-2">What I changed</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>A quarterly planning cadence to stabilise priorities</li>
            <li>Explicit trade-offs so changes were conscious, not reactive</li>
            <li>Dependency mapping to surface potential delays in delivery</li>
            <li>Accountability and communication structures that reduced last-minute churn</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-dark mb-2">The result</h4>
          <p>
            Predictable delivery, strategic work shipping, leadership out of firefighting mode.
            The team didn&apos;t work harder. The system stopped forcing failure.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'platform-migration',
    icon: TrendingUp,
    headline: 'Business-Critical Platform Migration with Zero Room for Error',
    summary: 'Led 80+ people across 12 workstreams. Went live with 10 minutes of planned downtime, zero outages. Direct impact: multiples increase in company valuation.',
    expandedContent: (
      <div className="space-y-4 text-dark-600">
        <div>
          <h4 className="font-semibold text-dark mb-2">What made this genuinely hard</h4>
          <p>
            A core technology platform with millions of records needed to be migrated in-house.
            This was not a lift-and-shift. The incoming data exposed real gaps in the target platform.
            A complex ETL was required, alongside new product and engineering work.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-dark mb-2">The constraint I focused on</h4>
          <p>
            This programme would fail if technical discovery, product decisions, and delivery
            coordination drifted out of sync. The work required someone who could get into the
            technical weeds when needed, translate implications to stakeholders, and maintain
            system-level coherence.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-dark mb-2">What I did</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Led overall programme design across 12 concurrent workstreams</li>
            <li>Oversaw the ETL strategy and migration approach</li>
            <li>Identified functional gaps and shaped required development work</li>
            <li>Maintained clear ownership and decision pathways throughout</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-dark mb-2">What changed</h4>
          <p>
            10 minutes of planned downtime, zero outages, no data integrity issues. A critical
            technology asset successfully brought in-house, resulting in a direct increase in
            company valuation.
          </p>
        </div>
      </div>
    ),
  },
]

const additionalCaseStudies: CaseStudy[] = [
  {
    id: 'engineering-culture',
    icon: Users,
    headline: 'Engineering Team Transformation',
    summary: 'Siloed engineering, broken collaboration with Product and Design. Rebuilt cross-functional relationships, eliminated chronic overruns, shifted culture from "us vs them" to collaborative delivery.',
  },
  {
    id: 'enterprise-healthcare',
    icon: Target,
    headline: 'Enterprise Healthcare Expansion',
    summary: 'Company expanding into enterprise healthcare. New flagship client signed but internal confusion on system readiness. Defined success criteria, assessed 3 core systems, delivered a clear roadmap for launch.',
  },
  {
    id: 'tech-validation',
    icon: Wrench,
    headline: 'Critical Tech Decision Validation',
    summary: 'Cut through the noise, designed a right-sized integration solution, ran vendor selection. Bonus: identified over $100K/year in manual workarounds the execs didn\'t know about.',
  },
]

function AccordionCard({ study }: { study: CaseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = study.icon

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      layout
    >
      <button
        className="w-full p-6 text-left flex items-start gap-4"
        onClick={() => study.expandedContent && setIsExpanded(!isExpanded)}
      >
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-dark mb-2">{study.headline}</h3>
          <p className="text-dark-500">{study.summary}</p>
        </div>
        {study.expandedContent && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-dark-400" />
          </motion.div>
        )}
      </button>

      <AnimatePresence>
        {isExpanded && study.expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
              {study.expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CompactCard({ study }: { study: CaseStudy }) {
  const Icon = study.icon

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-dark mb-1">{study.headline}</h3>
          <p className="text-sm text-dark-500">{study.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <SectionWrapper id="results" background="white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
          Results That Speak
        </h2>
        <p className="text-lg text-dark-500 max-w-2xl mx-auto">
          Real outcomes from organisations that stopped tolerating structural drag.
        </p>
      </div>

      {/* Main case studies with accordion */}
      <div className="space-y-4 mb-10">
        {mainCaseStudies.map((study) => (
          <AccordionCard key={study.id} study={study} />
        ))}
      </div>

      {/* Additional case studies - compact cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {additionalCaseStudies.map((study) => (
          <CompactCard key={study.id} study={study} />
        ))}
      </div>
    </SectionWrapper>
  )
}
