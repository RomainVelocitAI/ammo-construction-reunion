import { Metadata } from 'next'
import MaitriseOeuvreContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Maîtrise d\'Œuvre | Groupe AMMO La Réunion',
  description: 'Pilotage, coordination OPC et suivi de chantier. AMMO assure la maîtrise d\'œuvre de vos projets à La Réunion.',
  openGraph: {
    title: 'Maîtrise d\'Œuvre | Groupe AMMO La Réunion',
    description: 'Pilotage, coordination OPC et suivi de chantier. AMMO assure la maîtrise d\'œuvre de vos projets à La Réunion.',
    url: 'https://ammo.re/pole/maitrise-oeuvre',
    siteName: 'Groupe AMMO',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <MaitriseOeuvreContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Maîtrise d\'Œuvre — Groupe AMMO',
            description: 'Pilotage, coordination OPC et suivi de chantier à La Réunion.',
            provider: {
              '@type': 'Organization',
              name: 'Groupe AMMO',
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
              'Coordination de projet',
              'OPC (ordonnancement, pilotage, coordination)',
              'Suivi de chantier',
              'Pilotage technique',
            ],
          }),
        }}
      />
    </>
  )
}
