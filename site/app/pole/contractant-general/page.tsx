import { Metadata } from 'next'
import ContractantGeneralContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contractant Général | Groupe AMMO La Réunion',
  description: 'Rénovation, extension, gros œuvre et projets d\'envergure. Un seul interlocuteur pour tous vos travaux à La Réunion.',
  openGraph: {
    title: 'Contractant Général | Groupe AMMO La Réunion',
    description: 'Rénovation, extension, gros œuvre et projets d\'envergure. Un seul interlocuteur pour tous vos travaux à La Réunion.',
    url: 'https://ammo.re/pole/contractant-general',
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
        <ContractantGeneralContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Contractant Général — Groupe AMMO',
            description: 'Rénovation, extension, gros œuvre et projets d\'envergure à La Réunion. Un seul contrat, tous les corps de métier.',
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
              'Rénovation complète et partielle',
              'Extension sur-mesure',
              'Gros œuvre',
              'Projets d\'envergure',
            ],
          }),
        }}
      />
    </>
  )
}
