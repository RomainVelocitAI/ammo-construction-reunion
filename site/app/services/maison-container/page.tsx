import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxContainer } from '@/components/zoom-parallax-container'
import AnimatedSectionsContainer from '@/components/animated-sections-container'

export default function MaisonContainerPage() {
  const images = [
    { src: '/maison_contener.png', alt: 'Maison Container Vue Principale' },
    { src: '/maison_contener.png', alt: 'Maison Container Intérieur' },
    { src: '/maison_contener.png', alt: 'Maison Container Extérieur' },
    { src: '/maison_contener.png', alt: 'Maison Container Design' },
    { src: '/maison_contener.png', alt: 'Maison Container Nuit' },
    { src: '/maison_contener.png', alt: 'Maison Container Terrasse' },
    { src: '/maison_contener.png', alt: 'Maison Container Jardin' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative">
          <ZoomParallaxContainer images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Maison Container
              </h1>
              <p className="text-xl lg:text-2xl text-amber-600 mb-12">
                Construction modulaire écologique et moderne
              </p>
            </div>
          </div>
        </section>

        {/* Section Innovation Durable */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                L'Innovation Durable à La Réunion
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Nos maisons container représentent l'alliance parfaite entre durabilité, modernité et confort.
                    Conçues pour s'adapter au climat tropical de La Réunion, elles offrent une solution de logement
                    écologique et économique sans compromis sur le style.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Chaque container est transformé selon les normes RE2020 les plus strictes, garantissant une isolation
                    thermique exceptionnelle et une résistance cyclonique certifiée. Notre expertise locale nous permet
                    d'adapter chaque projet aux spécificités de votre terrain et de votre environnement.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    De la conception à la livraison clé en main, nous vous accompagnons dans toutes les étapes de votre
                    projet pour créer un habitat unique qui vous ressemble.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/maison_contener.png"
                    alt="Maison container moderne"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantages Écologiques</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Construction rapide</strong>
                        <p className="text-gray-600">3 à 4 mois seulement du début à la fin</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Isolation RE2020</strong>
                        <p className="text-gray-600">Performance thermique optimale pour le climat tropical</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Résistance cyclonique</strong>
                        <p className="text-gray-600">Structure renforcée certifiée aux normes locales</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Recyclage intelligent</strong>
                        <p className="text-gray-600">Réutilisation de containers maritimes pour une empreinte carbone réduite</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Options & Finitions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Surfaces modulables</strong>
                        <p className="text-gray-600">De 20m² à 150m² selon vos besoins</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Finitions premium</strong>
                        <p className="text-gray-600">Matériaux haut de gamme et équipements modernes</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Design sur-mesure</strong>
                        <p className="text-gray-600">Architecture personnalisée selon vos goûts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Extensions possibles</strong>
                        <p className="text-gray-600">Évolutif selon l'évolution de vos besoins</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Votre Projet de Maison Container Commence Ici</h3>
                <p className="text-xl mb-8 opacity-95">
                  Obtenez une étude personnalisée gratuite et découvrez comment transformer votre rêve en réalité
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Demander un Devis Gratuit
                  </a>
                  <a
                    href="tel:+262692000000"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Appeler un Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}
        <AnimatedSectionsContainer />
      </main>
      <Footer />
    </>
  )
}