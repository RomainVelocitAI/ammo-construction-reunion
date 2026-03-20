import { Metadata } from 'next'
import AmmoConceptionContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'AMMO CONCEPTION | Plans, 3D et Permis de Construire à La Réunion',
  description: "Bureau d'études intégré : plans architecturaux, modélisation 3D, dossiers permis de construire à La Réunion.",
  openGraph: {
    title: 'AMMO CONCEPTION | Plans, 3D et Permis de Construire à La Réunion',
    description: "Bureau d'études intégré : plans architecturaux, modélisation 3D, dossiers permis de construire.",
    url: 'https://ammo.re/pole/ammo-conception',
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
        <AmmoConceptionContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AMMO CONCEPTION',
            description: "Bureau d'études intégré : plans architecturaux, modélisation 3D, permis de construire à La Réunion.",
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
              'Plans architecturaux',
              'Modélisation 3D',
              'Permis de construire',
              'Études techniques',
              'Conseil et accompagnement',
            ],
          }),
        }}
      />
    </>
  )
}
