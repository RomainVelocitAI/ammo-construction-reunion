import { Metadata } from 'next'
import ConceptionContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Conception | Groupe AMMO La Réunion',
  description: "Bureau d'études intégré : plans architecturaux, modélisation 3D, permis de construire et études techniques à La Réunion.",
  openGraph: {
    title: 'Conception | Groupe AMMO La Réunion',
    description: "Bureau d'études intégré : plans architecturaux, modélisation 3D, permis de construire et études techniques à La Réunion.",
    url: 'https://ammo.re/pole/conception',
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
        <ConceptionContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Conception — Groupe AMMO',
            description: "Bureau d'études intégré : plans architecturaux, modélisation 3D, permis de construire et études techniques à La Réunion.",
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
