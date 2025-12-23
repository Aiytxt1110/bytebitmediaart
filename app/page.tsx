'use client'
import Navigation from '../components/Navigation/page'
import Hero from '../components/Hero/page'
import Stats from '../components/Stats/page'
import AboutSection from './AboutSection/page'
import Services from '../components/Services/page'
import HowItWorksSection from '../components/HowItWorksSection/page'
import WhyUsSection from '../components/WhyUsSection/page'
import Contact from '../components/Contact/page'
import Footer from '../components/Footer/page'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <main className="flex-grow overflow-x-hidden">
          <Hero />
          <Stats/>
          <section id="about">
            <AboutSection />
          </section>
          <section id="services">
            <Services />
          </section>
          <WhyUsSection />
          <HowItWorksSection/>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
