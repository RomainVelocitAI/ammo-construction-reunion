import { LandingAccordionItem } from '@/components/interactive-image-accordion'
import { Header } from '@/components/header'
import { AboutSectionSplit } from '@/components/about-section-split'
import { MethodologySection } from '@/components/methodology-section'
import MaintenanceAlternatingSection from '@/components/maintenance-alternating-section'
import { ServicesIntroSection } from '@/components/services-intro-section'
import FaqSection from '@/components/faq-sections'
import { ContactSectionV3 } from '@/components/contact-section-v3'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AMMO - Maitrise d\'Oeuvre La Reunion | Construction & Renovation 974',
  description: 'Expert en maitrise d\'oeuvre a La Reunion. AMMO vous accompagne dans vos projets de construction, renovation et amenagement. Devis gratuit sous 48h. Contact : 0693 397 786',
  keywords: 'maitrise d\'oeuvre La Reunion, maitre d\'oeuvre 974, construction La Reunion, renovation La Reunion, architecte La Reunion, bureau d\'etudes construction, La Possession',
  authors: [{ name: 'AMMO' }],
  openGraph: {
    title: 'AMMO - Maitrise d\'Oeuvre Experte a La Reunion',
    description: 'Specialiste maitrise d\'oeuvre pour vos projets de construction et renovation a La Reunion. Expertise technique, suivi personnalise, respect des delais.',
    url: 'https://ammo.re',
    siteName: 'AMMO Maitrise d\'Oeuvre',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://ammo.re/logo.png',
        width: 1200,
        height: 630,
        alt: 'AMMO - Maitrise d\'Oeuvre La Reunion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMMO - Maitrise d\'Oeuvre La Reunion',
    description: 'Expert maitrise d\'oeuvre construction & renovation La Reunion 974',
    images: ['https://ammo.re/logo.png'],
  },
  alternates: {
    canonical: 'https://ammo.re',
  },
  other: {
    'geo.region': 'RE',
    'geo.placename': 'La Possession',
    'geo.position': '-20.9357;55.3345',
    'ICBM': '-20.9357, 55.3345',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'GeneralContractor',
            name: 'AMMO - Maitrise d\'Oeuvre',
            description: 'Societe de maitrise d\'oeuvre specialisee en construction et renovation a La Reunion',
            url: 'https://ammo.re',
            logo: 'https://ammo.re/logo.png',
            image: 'https://ammo.re/logo.png',
            telephone: '+262693397786',
            email: 'info@ammo.re',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '8 ruelle Boulot',
              addressLocality: 'La Possession',
              postalCode: '97419',
              addressRegion: 'La Reunion',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '-20.9357',
              longitude: '55.3345',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '08:00',
              closes: '18:00',
            },
            priceRange: 'Sur devis',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '-20.9357',
                longitude: '55.3345',
              },
              geoRadius: '50000',
            },
            sameAs: [
              'https://www.facebook.com/profile.php?id=61572855163213',
              'https://www.instagram.com/ammo_maitrisedoeuvre974/',
            ],
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <LandingAccordionItem />
        <div id="about">
          <AboutSectionSplit />
        </div>
        <MethodologySection />
        <div id="services">
          <ServicesIntroSection />
        </div>
        <div id="realisations">
          <MaintenanceAlternatingSection />
        </div>
        <FaqSection />
        <div id="contact">
          <ContactSectionV3 />
        </div>
      </main>
      <Footer />
    </>
  )
}
