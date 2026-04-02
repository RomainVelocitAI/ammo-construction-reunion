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
  title: 'Groupe AMMO | Bâtiment à La Réunion',
  description: 'AMMO maîtrise toute la chaîne de valeur du bâtiment à La Réunion : conception, maîtrise d\'œuvre, contractant général, second œuvre. 15+ ans d\'expérience.',
  keywords: 'groupe AMMO, bâtiment La Réunion, contractant général, maîtrise d\'œuvre, conception, rénovation 974, second œuvre, finitions, Saint-Denis',
  authors: [{ name: 'Groupe AMMO' }],
  openGraph: {
    title: 'Groupe AMMO | Bâtiment à La Réunion',
    description: 'AMMO maîtrise toute la chaîne de valeur du bâtiment à La Réunion : conception, maîtrise d\'œuvre, contractant général, second œuvre. 15+ ans d\'expérience.',
    url: 'https://ammo.re',
    siteName: 'Groupe AMMO',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://ammo.re/logo.png',
        width: 1200,
        height: 630,
        alt: 'Groupe AMMO - Bâtiment La Réunion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groupe AMMO | Bâtiment à La Réunion',
    description: 'AMMO maîtrise toute la chaîne de valeur du bâtiment à La Réunion. 15+ ans d\'expérience.',
    images: ['https://ammo.re/logo.png'],
  },
  alternates: {
    canonical: 'https://ammo.re',
  },
  other: {
    'geo.region': 'RE',
    'geo.placename': 'Saint-Denis',
    'geo.position': '-20.8789;55.4481',
    'ICBM': '-20.8789, 55.4481',
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
            name: 'Groupe AMMO',
            description: 'Groupe AMMO — maîtrise de la chaîne de valeur du bâtiment à La Réunion. Conception, maîtrise d\'œuvre, contractant général, second œuvre. 15+ ans d\'expérience.',
            url: 'https://ammo.re',
            logo: 'https://ammo.re/logo.png',
            image: 'https://ammo.re/logo.png',
            telephone: '+262693638656',
            email: 'info@ammo.re',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '19 Rue Patrice Lumumba',
              addressLocality: 'La Possession',
              postalCode: '97419',
              addressRegion: 'La Reunion',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '-20.8789',
              longitude: '55.4481',
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
              'https://www.instagram.com/ammo_contractantgeneral974/',
            ],
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-background">
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
