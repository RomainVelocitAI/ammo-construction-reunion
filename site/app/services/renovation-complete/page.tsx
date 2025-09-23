import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxRenovation } from '@/components/zoom-parallax-renovation'
import AnimatedSectionsRenovation from '@/components/animated-sections-renovation'

export default function RenovationCompletePage() {
  const images = [
    { src: '/renovation.png', alt: 'Rénovation Complète Avant/Après' },
    { src: '/renovation.png', alt: 'Rénovation Complète Intérieur' },
    { src: '/renovation.png', alt: 'Rénovation Complète Façade' },
    { src: '/renovation.png', alt: 'Rénovation Complète Cuisine' },
    { src: '/renovation.png', alt: 'Rénovation Complète Salle de Bain' },
    { src: '/renovation.png', alt: 'Rénovation Complète Terrasse' },
    { src: '/renovation.png', alt: 'Rénovation Complète Finitions' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative">
          <ZoomParallaxRenovation images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Rénovation Complète
              </h1>
              <p className="text-xl lg:text-2xl text-amber-600 mb-12">
                Transformation totale de votre habitat
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Renaissance de Votre Patrimoine Immobilier
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nous redonnons vie à votre bien immobilier avec une approche complète de rénovation.
                De la conception à la finition, chaque détail est pensé pour moderniser votre espace
                tout en respectant son caractère unique et en optimisant sa performance énergétique.
              </p>
            </div>
          </div>
        </section>

        {/* Section Transformation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Transformation Complète de Votre Habitat
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    La rénovation complète est bien plus qu'un simple rafraîchissement. C'est une transformation
                    profonde qui redonne vie à votre bien, améliore votre confort de vie et augmente significativement
                    la valeur de votre patrimoine immobilier.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Notre équipe pluridisciplinaire prend en charge l'intégralité de votre projet : du diagnostic
                    initial aux finitions les plus minutieuses. Nous coordonnons tous les corps de métier pour
                    garantir un résultat impeccable dans les délais convenus.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Chaque rénovation est unique. Nous adaptons notre intervention à vos besoins spécifiques,
                    que ce soit pour moderniser une case créole traditionnelle ou transformer un appartement
                    en espace contemporain.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/renovation.png"
                    alt="Rénovation complète La Réunion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Diagnostic & Planification</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Diagnostic complet du bâti</strong>
                        <p className="text-gray-600">Analyse structurelle, thermique et technique approfondie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Mise aux normes RE2020</strong>
                        <p className="text-gray-600">Conformité réglementaire et performance énergétique optimale</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Optimisation énergétique</strong>
                        <p className="text-gray-600">Réduction de 40% minimum de votre consommation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Valorisation du patrimoine</strong>
                        <p className="text-gray-600">Augmentation de la valeur de votre bien jusqu'à 30%</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Corps de Métiers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Gros œuvre et structure</strong>
                        <p className="text-gray-600">Maçonnerie, charpente, toiture, fondations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Isolation et étanchéité</strong>
                        <p className="text-gray-600">Protection thermique et acoustique haute performance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Plomberie et électricité</strong>
                        <p className="text-gray-600">Installation complète aux normes actuelles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3">•</span>
                      <div>
                        <strong className="text-gray-900">Finitions et décoration</strong>
                        <p className="text-gray-600">Peinture, sols, menuiseries, aménagements sur-mesure</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Transformez Votre Bien en Véritable Joyau</h3>
                <p className="text-xl mb-8 opacity-95">
                  Étude gratuite et devis détaillé pour votre projet de rénovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Demander une Étude Gratuite
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Voir nos Rénovations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}
        <AnimatedSectionsRenovation />
      </main>
      <Footer />
    </>
  )
}