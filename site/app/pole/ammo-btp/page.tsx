import { Metadata } from 'next'
import AmmoBtpContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'AMMO BTP | Rénovation et Gros Œuvre à La Réunion',
  description: 'AMMO BTP : rénovation complète, peinture, agencement et meubles sur mesure. Votre interlocuteur unique à La Réunion.',
  openGraph: {
    title: 'AMMO BTP | Rénovation et Gros Œuvre à La Réunion',
    description: 'AMMO BTP : rénovation complète, peinture, agencement et meubles sur mesure. Votre interlocuteur unique.',
    url: 'https://ammo.re/pole/ammo-btp',
    siteName: 'AMMO Contractant Général',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <AmmoBtpContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AMMO BTP',
            description: 'Rénovation complète, peinture, agencement et meubles sur mesure à La Réunion.',
            provider: {
              '@type': 'Organization',
              name: 'AMMO',
              url: 'https://ammo.re',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8 ruelle Boulot',
                addressLocality: 'Saint-Denis',
                postalCode: '97400',
                addressRegion: 'La Réunion',
                addressCountry: 'FR',
              },
            },
            areaServed: {
              '@type': 'Place',
              name: 'La Réunion',
            },
            serviceType: [
              'Rénovation complète et partielle',
              'Peinture intérieure et extérieure',
              'Agencement et aménagement intérieur',
              'Meubles sur mesure',
              'Gros œuvre et second œuvre',
            ],
          }),
        }}
      />
    </>
  )
}
