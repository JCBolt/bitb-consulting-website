import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import SystemsPOV from '@/components/SystemsPOV'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import CaseStudies from '@/components/CaseStudies'
import HowWeWork from '@/components/HowWeWork'
import BeyondWork from '@/components/BeyondWork'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PainPoints />
      <SystemsPOV />
      <WhyWorkWithMe />
      <CaseStudies />
      <HowWeWork />
      <BeyondWork />
      <Contact />
      <Footer />
    </main>
  )
}
