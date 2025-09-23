import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxVilla } from '@/components/zoom-parallax-villa'
import AnimatedSectionsVilla from '@/components/animated-sections-villa'

export default function VillaContemporainePage() {
  const images = [
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Vue Principale' },
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Architecture' },
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Piscine' },
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Intérieur' },
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Jardin' },
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Terrasse' },
    { src: '/villamoderne.png', alt: 'Villa Contemporaine Nuit' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative">
          <ZoomParallaxVilla images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Villa Contemporaine
              </h1>
              <p className="text-xl lg:text-2xl text-amber-600 mb-12">
                Architecture moderne et design personnalisé
              </p>
            </div>
          </div>
        </section>

        {/* Section Excellence */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                L'Excellence Architecturale Tropicale
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/villamoderne.png"
                    alt="Villa contemporaine La Réunion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Nos villas contemporaines incarnent le luxe et le raffinement adaptés au climat tropical
                    de La Réunion. Chaque projet est une œuvre unique, conçue pour fusionner harmonieusement
                    avec son environnement tout en offrant un confort de vie exceptionnel.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Notre approche architecturale privilégie les espaces ouverts, la lumière naturelle et
                    la ventilation croisée. Nous créons des villas qui respirent, où l'intérieur et l'extérieur
                    se fondent naturellement pour profiter pleinement du cadre exceptionnel de l'île.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Chaque villa est pensée dans ses moindres détails : de l'orientation optimale pour capter
                    les alizés, au choix des matériaux nobles résistants au climat tropical, en passant par
                    l'intégration harmonieuse dans le paysage réunionnais.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Design & Architecture</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Architecture bioclimatique</strong>
                        <p className="text-gray-600">Conception optimisée pour le confort tropical naturel</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Baies vitrées XXL</strong>
                        <p className="text-gray-600">Ouvertures panoramiques pour une vue exceptionnelle</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Espaces modulables</strong>
                        <p className="text-gray-600">Pièces évolutives selon vos besoins et envies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Toiture végétalisée</strong>
                        <p className="text-gray-600">Option écologique pour une isolation naturelle</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Prestations Haut de Gamme</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Domotique complète</strong>
                        <p className="text-gray-600">Maison intelligente avec contrôle centralisé</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Piscine à débordement</strong>
                        <p className="text-gray-600">Design sur-mesure avec système de filtration écologique</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Suite parentale luxueuse</strong>
                        <p className="text-gray-600">Dressing, salle de bain spa, terrasse privative</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Cuisine d'architecte</strong>
                        <p className="text-gray-600">Équipements premium et îlot central design</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Créons Ensemble Votre Villa d'Exception</h3>
                <p className="text-xl mb-8 opacity-95">
                  Consultation gratuite avec notre architecte pour concevoir la villa de vos rêves
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Réserver une Consultation
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Voir nos Villas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}
        <AnimatedSectionsVilla />
      </main>
      <Footer />
    </>
  )
}