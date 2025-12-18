'use client'
import Navigation from '../components/Navigation/page'
import Hero from '../components/Hero/page'
import Stats from '../components/Stats/page'
import Features from '../components/Features/page'
import { AboutSection } from '../components/AboutSection/page'
import Services from '../components/Services/page'
import Portfolio from '../components/Portfolio/page'
import HowItWorksSection from '../components/HowItWorksSection/page'
import WhyUsSection from '../components/WhyUsSection/page'
import CTA from '../components/CTA/page'
import Contact from '../components/Contact/page'
import Footer from '../components/Footer/page'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-w-screen overflow-x-hidden bg-gray-50">
        <Hero />
        <Stats />
        <Features />
        <AboutSection />
        <Services />
        <Portfolio />
        <HowItWorksSection />
        <WhyUsSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
