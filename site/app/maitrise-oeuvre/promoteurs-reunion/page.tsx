import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxPromoteurs } from '@/components/zoom-parallax-promoteurs'
import AnimatedSectionsPromoteurs from '@/components/animated-sections-promoteurs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maitrise d\'Oeuvre Promoteurs Immobiliers La Reunion | AMMO',
  description: 'Expert maitrise d\'oeuvre pour promoteurs immobiliers La Reunion. Lotissements, immeubles rapport, ecolodges. Pilotage projets grande envergure.',
  keywords: 'maitrise d\'oeuvre promoteur, lotissement La Reunion, immeuble rapport 974, maitre d\'oeuvre promotion immobiliere, ecolodge La Reunion',
  openGraph: {
    title: 'Maitrise d\'Oeuvre Promoteurs Immobiliers La Reunion',
    description: 'Specialiste maitrise d\'oeuvre pour projets immobiliers professionnels. Coordination multi-lots, respect planning et budget.',
    url: 'https://ammo.re/maitrise-oeuvre/promoteurs-reunion',
    siteName: 'AMMO Maitrise d\'Oeuvre',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/lodgedeluxe.png', width: 1200, height: 630, alt: 'Projets Promoteurs La Reunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/maitrise-oeuvre/promoteurs-reunion',
  },
}

export default function PromoteursProfessionnelsPage() {
  const images = [
    { src: '/promoteur-1.jpg', alt: 'Maitrise d\'oeuvre lotissement ecolodge La Reunion - Vue isometrique 3D AMMO' },
    { src: '/promoteur-2.jpg', alt: 'Architecture ecolodge promotion immobiliere 974 - Lodge moderne AMMO' },
    { src: '/promoteur-3.jpg', alt: 'Lotissement eco-lodge tropical 974 - Visualisation 3D AMMO' },
    { src: '/promoteur-4.jpg', alt: 'Lotissement vue aerienne isometrique 974 - Maitrise d\'oeuvre AMMO' },
    { src: '/promoteur-5.jpg', alt: 'Eco-lodge luxe La Reunion - Conception durable AMMO' },
    { src: '/promoteur-6.jpg', alt: 'Plan masse lotissement eco-lodge 974 - Coordination AMMO maitre d\'oeuvre' },
    { src: '/promoteur-7.jpg', alt: 'Architecture tropicale eco-lodge La Reunion - Expertise AMMO' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Maitrise d\'oeuvre promotion immobiliere',
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
            description: 'Service complet de maitrise d\'oeuvre pour promoteurs immobiliers a La Reunion. Pilotage de projets grande envergure, lotissements, immeubles de rapport, ecolodges.',
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
          <ZoomParallaxPromoteurs images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Promoteurs Professionnels
              </h1>
              <p className="text-xl lg:text-2xl text-amber-600 mb-12">
                Lotissement Écolodge • Immeuble de Rapport • Projets Collectifs
              </p>
            </div>
          </div>
        </section>

        {/* Section Excellence */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Votre Partenaire pour des Projets Immobiliers d'Excellence
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/promoteur-1.jpg"
                    alt="Lotissement écolodge La Réunion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    AMMO accompagne les promoteurs professionnels dans la réalisation de projets immobiliers
                    d'envergure à La Réunion. Du lotissement écolodge à l'immeuble de rapport, nous maîtrisons
                    l'ensemble de la chaîne de valeur pour transformer vos ambitions en réalisations rentables
                    et pérennes.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Notre expertise technique combinée à notre connaissance approfondie du marché réunionnais
                    nous permet d'optimiser chaque projet : viabilisation de terrains, conception architecturale,
                    coordination des corps d'état, respect des délais et des budgets.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nous intégrons dès la phase de conception les enjeux de rentabilité, de durabilité et
                    d'attractivité pour maximiser la valeur de vos investissements immobiliers. Chaque projet
                    bénéficie de notre rigueur technique RE2020 et de notre savoir-faire en construction tropicale.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Lotissement Écolodge</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Concept écoresponsable</strong>
                        <p className="text-gray-600">Lodges à faible impact environnemental, architecture bioclimatique</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Viabilisation complète</strong>
                        <p className="text-gray-600">Réseaux, voiries, espaces verts et équipements communs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Attractivité touristique</strong>
                        <p className="text-gray-600">Conçu pour maximiser le rendement locatif saisonnier</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Gestion administrative</strong>
                        <p className="text-gray-600">Accompagnement réglementaire et autorisations</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Immeuble de Rapport</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Optimisation foncière</strong>
                        <p className="text-gray-600">Maximisation du potentiel constructible et de la rentabilité</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Conception modulaire</strong>
                        <p className="text-gray-600">T2 à T4, adaptés à la demande locative réunionnaise</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Normes RE2020</strong>
                        <p className="text-gray-600">Performance énergétique et confort thermique optimaux</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Équipements collectifs</strong>
                        <p className="text-gray-600">Parkings, local vélos, espaces verts privatifs</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Développons Ensemble Votre Projet Immobilier</h3>
                <p className="text-xl mb-8 opacity-95">
                  Étude de faisabilité gratuite avec notre équipe technique et commerciale
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Étude de Faisabilité
                  </a>
                  <a
                    href="/#realisations"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Nos Réalisations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}
        <AnimatedSectionsPromoteurs />
      </main>
      <Footer />
    </>
  )
}
