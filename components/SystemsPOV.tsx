'use client'

import SectionWrapper from './ui/SectionWrapper'

export default function SystemsPOV() {
  return (
    <SectionWrapper id="systems-pov" background="white">
      <div className="max-w-3xl mx-auto">
        {/* Pull quote */}
        <div className="relative mb-10">
          <div className="absolute -left-4 top-0 w-1 h-full accent-line rounded-full" />
          <blockquote className="text-2xl md:text-3xl font-medium text-dark pl-6 italic">
            &ldquo;Every broken system is protecting something.&rdquo;
          </blockquote>
        </div>

        {/* Supporting text */}
        <div className="space-y-6 text-lg text-dark-600">
          <p>
            Whether it&apos;s power, speed, safety, or status, if you don&apos;t identify what the
            system is protecting, you can&apos;t fix it.
          </p>
          <p>
            This is why internal teams so often can&apos;t solve the problems they&apos;re living
            inside. The system works well enough for someone with authority, even as it
            quietly taxes everyone else.
          </p>
          <p>
            My job is to surface that truth early, name it without blame, and design
            changes that actually stick, because they account for how the organisation
            really operates, not how it wishes it did.
          </p>
        </div>

        {/* Decorative element */}
        <div className="flex items-center justify-center mt-12 space-x-4">
          <div className="w-16 h-0.5 bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-16 h-0.5 bg-primary/40" />
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-dark font-medium">
            I combine systems thinking with emotional intelligence.
          </p>
          <p className="text-lg text-dark-500 mt-3">
            I see the friction, name it cleanly, and design changes that account for
            how people actually work, not just how org charts say they should.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
