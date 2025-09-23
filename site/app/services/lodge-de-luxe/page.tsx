import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxLodge } from '@/components/zoom-parallax-lodge'
import AnimatedSectionsLodge from '@/components/animated-sections-lodge'

export default function LodgeDeLuxePage() {
  const images = [
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Vue Panoramique' },
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Intérieur Premium' },
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Suite Master' },
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Terrasse Privée' },
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Spa' },
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Vue Océan' },
    { src: '/lodgedeluxe.png', alt: 'Lodge de Luxe Nuit Étoilée' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative">
          <ZoomParallaxLodge images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Lodge de Luxe
              </h1>
              <p className="text-xl lg:text-2xl text-amber-600 mb-12">
                Hébergements touristiques haut de gamme
              </p>
            </div>
          </div>
        </section>

        {/* Section Lodge Paradise */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Lodge Paradise : L'Expérience Ultime du Luxe Tropical
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Créez une expérience d'hébergement inoubliable avec nos lodges de luxe. Conçus pour
                    le tourisme haut de gamme et les locations saisonnières d'exception, nos lodges
                    allient confort moderne, design épuré et intégration harmonieuse dans les plus
                    beaux sites de La Réunion.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Chaque lodge est une œuvre architecturale unique, pensée pour offrir une immersion
                    totale dans la beauté naturelle de l'île tout en garantissant intimité, confort
                    absolu et prestations 5 étoiles. Un investissement rentable pour les propriétaires
                    et une expérience mémorable pour les visiteurs.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Avec notre expertise en construction haut de gamme et notre réseau de partenaires
                    touristiques, nous créons des lodges qui deviennent rapidement des références
                    dans l'hébergement de luxe à La Réunion.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/lodgedeluxe.png"
                    alt="Lodge de luxe La Réunion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Concept Lodge Paradise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Architecture bioclimatique</strong>
                        <p className="text-gray-600">Design tropical adapté au climat de l'île</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Matériaux premium</strong>
                        <p className="text-gray-600">Bois nobles, pierre volcanique, finitions luxe</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Équipements 5 étoiles</strong>
                        <p className="text-gray-600">Spa, piscine privée, cuisine équipée haut de gamme</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Autonomie énergétique</strong>
                        <p className="text-gray-600">Panneaux solaires et systèmes éco-responsables</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Premium</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Gestion locative clé en main</strong>
                        <p className="text-gray-600">Conciergerie et maintenance complète</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Marketing touristique</strong>
                        <p className="text-gray-600">Référencement sur plateformes premium</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Services aux occupants</strong>
                        <p className="text-gray-600">Chef privé, spa, activités exclusives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Garantie rentabilité</strong>
                        <p className="text-gray-600">ROI de 15 à 20% par an</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Investissez dans le Tourisme de Luxe</h3>
                <p className="text-xl mb-8 opacity-95">
                  Étude de rentabilité gratuite pour votre projet de lodge
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Étude de Projet Gratuite
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Découvrir nos Lodges
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}
        <AnimatedSectionsLodge />
      </main>
      <Footer />
    </>
  )
}