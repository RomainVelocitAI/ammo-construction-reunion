import { LandingAccordionItem } from '@/components/interactive-image-accordion'
import { Header } from '@/components/header'
import { AboutSectionSplit } from '@/components/about-section-split'
import MaintenanceAlternatingSection from '@/components/maintenance-alternating-section'
import { ServicesIntroSection } from '@/components/services-intro-section'
import FaqSection from '@/components/faq-sections'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <LandingAccordionItem />
        <AboutSectionSplit />
        <ServicesIntroSection />
        <MaintenanceAlternatingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
