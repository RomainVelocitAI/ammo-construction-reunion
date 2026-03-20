import { Metadata } from 'next'
import AmmoExecutionContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'AMMO EXECUTION | Bois et Aménagements Extérieurs à La Réunion',
  description: 'Terrasses, pergolas, carports, bardage et traitement bois. Savoir-faire artisanal à La Réunion.',
  openGraph: {
    title: 'AMMO EXECUTION | Bois et Aménagements Extérieurs à La Réunion',
    description: 'Terrasses, pergolas, carports, bardage et traitement bois. Savoir-faire artisanal à La Réunion.',
    url: 'https://ammo.re/pole/ammo-execution',
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
        <AmmoExecutionContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AMMO EXECUTION',
            description: 'Terrasses, pergolas, carports, bardage et traitement bois à La Réunion.',
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
              'Terrasses bois et composite',
              'Pergolas et carports',
              'Traitement et protection du bois',
              'Bardage extérieur',
              'Abris et aménagements sur mesure',
            ],
          }),
        }}
      />
    </>
  )
}
