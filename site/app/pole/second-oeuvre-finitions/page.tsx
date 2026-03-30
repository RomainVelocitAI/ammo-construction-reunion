import { Metadata } from 'next'
import SecondOeuvreFinitionsContent from './content'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Second Œuvre & Finitions | Groupe AMMO',
  description: 'Peinture, agencement, meubles sur mesure, terrasses, pergolas, bardage. Savoir-faire artisanal à La Réunion.',
  openGraph: {
    title: 'Second Œuvre & Finitions | Groupe AMMO',
    description: 'Peinture, agencement, meubles sur mesure, terrasses, pergolas, bardage. Savoir-faire artisanal à La Réunion.',
    url: 'https://ammo.re/pole/second-oeuvre-finitions',
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
        <SecondOeuvreFinitionsContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Second Œuvre & Finitions — Groupe AMMO',
            description: 'Peinture, agencement, meubles sur mesure, terrasses, pergolas, bardage et aménagements extérieurs à La Réunion.',
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
              'Peinture intérieure et extérieure',
              'Agencement et aménagement intérieur',
              'Meubles sur mesure',
              'Terrasses bois et composite',
              'Pergolas et carports',
              'Traitement et protection du bois, bardage extérieur',
              'Jardins et piscines',
              'Nettoyage fin de chantier',
            ],
          }),
        }}
      />
    </>
  )
}
