import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxExtension } from '@/components/zoom-parallax-extension'
import AnimatedSectionsExtension from '@/components/animated-sections-extension'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maitrise d\'Oeuvre Extension Maison La Reunion | AMMO 974',
  description: 'Expert maitrise d\'oeuvre extension maison La Reunion. Agrandissement sur-mesure, suite parentale, veranda. Pilotage complet. Devis gratuit.',
  keywords: 'maitrise d\'oeuvre extension, agrandissement maison La Reunion, extension 974, maitre d\'oeuvre agrandissement, suite parentale La Reunion, veranda tropicale',
  openGraph: {
    title: 'Maitrise d\'Oeuvre Extension Maison La Reunion',
    description: 'Specialiste maitrise d\'oeuvre pour agrandissement de maison. Coordination complete, respect budget et delais.',
    url: 'https://ammo.re/maitrise-oeuvre/extension-maison-reunion',
    siteName: 'AMMO Maitrise d\'Oeuvre',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/extension.png', width: 1200, height: 630, alt: 'Extension Maison La Reunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/maitrise-oeuvre/extension-maison-reunion',
  },
}

export default function ExtensionSurMesurePage() {
  const images = [
    { src: '/extension.png', alt: 'Maitrise d\'oeuvre extension maison La Reunion - Vue principale AMMO' },
    { src: '/extension.png', alt: 'Agrandissement moderne 974 - Pilotage AMMO maitre d\'oeuvre' },
    { src: '/extension.png', alt: 'Extension veranda tropicale La Reunion - Coordination AMMO' },
    { src: '/extension.png', alt: 'Bureau extension maison 974 - Maitrise d\'oeuvre AMMO' },
    { src: '/extension.png', alt: 'Suite parentale extension La Reunion - Suivi chantier AMMO' },
    { src: '/extension.png', alt: 'Salon extension sur-mesure 974 - Maitre d\'oeuvre' },
    { src: '/extension.png', alt: 'Integration extension architecture - Qualite AMMO' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Maitrise d\'oeuvre extension maison',
            provider: {
              '@type': 'GeneralContractor',
              name: 'AMMO',
              telephone: '+262693397786',
              email: 'info@ammo.re',
            },
            areaServed: {
              '@type': 'State',
              name: 'La Reunion',
            },
            description: 'Service complet de maitrise d\'oeuvre pour l\'extension et l\'agrandissement de maisons a La Reunion. Pilotage de projet, coordination artisans, respect budget.',
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'EUR',
                price: 'Sur devis',
              },
            },
          }),
        }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative">
          <ZoomParallaxExtension images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Extension Sur-Mesure
              </h1>
              <p className="text-xl lg:text-2xl text-amber-600 mb-12">
                Agrandissement harmonieux de votre espace
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Agrandissez Votre Horizon de Vie
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Votre famille s'agrandit ? Vos besoins évoluent ? Nos extensions sur-mesure sont
                conçues pour s'intégrer parfaitement à votre habitat existant. Nous créons des
                espaces supplémentaires qui respectent l'architecture originale tout en apportant
                modernité et fonctionnalité.
              </p>
            </div>
          </div>
        </section>

        {/* Section Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                L'Extension Idéale pour Votre Mode de Vie
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/extension.png"
                    alt="Extension sur-mesure La Réunion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    L'extension sur-mesure est la solution parfaite pour adapter votre habitat à l'évolution
                    de votre vie. Que vous accueilliez un nouveau membre dans la famille, que vous travailliez
                    depuis chez vous ou que vous souhaitiez simplement plus d'espace, nous créons l'extension
                    qui s'intègre parfaitement à votre maison existante.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Notre expertise en architecture tropicale nous permet de concevoir des extensions qui
                    respectent l'harmonie de votre habitat tout en apportant modernité et confort. Chaque
                    extension est pensée pour maximiser la luminosité, la ventilation naturelle et l'ouverture
                    sur l'extérieur.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    De la simple véranda à l'ajout d'un étage complet, nous maîtrisons toutes les techniques
                    pour agrandir votre espace de vie sans dénaturer votre propriété.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Types d'Extensions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Extension horizontale</strong>
                        <p className="text-gray-600">Agrandissement au sol jusqu'à 40m²</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Surélévation</strong>
                        <p className="text-gray-600">Ajout d'un étage complet ou partiel</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Véranda moderne</strong>
                        <p className="text-gray-600">Espace lumineux et bioclimatique</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Annexe indépendante</strong>
                        <p className="text-gray-600">Studio, bureau ou suite autonome</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Process</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Étude de faisabilité</strong>
                        <p className="text-gray-600">Analyse technique et réglementaire du projet</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Gestion administrative</strong>
                        <p className="text-gray-600">Permis de construire et autorisations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Intégration parfaite</strong>
                        <p className="text-gray-600">Harmonie avec l'existant garantie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Raccordements</strong>
                        <p className="text-gray-600">Intégration complète aux réseaux existants</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Agrandissez Votre Espace de Vie</h3>
                <p className="text-xl mb-8 opacity-95">
                  Étude personnalisée gratuite pour votre projet d'extension
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Obtenir une Étude Gratuite
                  </a>
                  <a
                    href="/#realisations"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Voir nos Extensions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}
        <AnimatedSectionsExtension />
      </main>
      <Footer />
    </>
  )
}