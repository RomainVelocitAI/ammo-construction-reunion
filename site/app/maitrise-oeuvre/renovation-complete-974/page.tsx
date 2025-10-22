import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxRenovation } from '@/components/zoom-parallax-renovation'
import AnimatedSectionsRenovation from '@/components/animated-sections-renovation'
import { RelatedServices } from '@/components/related-services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maitrise d\'Oeuvre Renovation Complete La Reunion | AMMO 974',
  description: 'Expert maitrise d\'oeuvre pour renovation complete a La Reunion. Transformation maison, mise aux normes RE2020, pilotage projet. Devis gratuit sous 48h.',
  keywords: 'maitrise d\'oeuvre renovation, renovation complete La Reunion, transformation maison 974, maitre d\'oeuvre renovation, mise aux normes RE2020, renovation case creole',
  openGraph: {
    title: 'Maitrise d\'Oeuvre Renovation Complete La Reunion',
    description: 'Specialiste maitrise d\'oeuvre renovation. Pilotage complet, coordination artisans, respect budget et delais.',
    url: 'https://ammo.re/maitrise-oeuvre/renovation-complete-974',
    siteName: 'AMMO Maitrise d\'Oeuvre',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/renovation.png', width: 1200, height: 630, alt: 'Renovation Complete La Reunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/maitrise-oeuvre/renovation-complete-974',
  },
}

export default function RenovationCompletePage() {
  const images = [
    { src: '/renovation.png', alt: 'Maitrise d\'oeuvre renovation complete La Reunion - Avant/Apres par AMMO' },
    { src: '/renovation.png', alt: 'Renovation interieur maison La Reunion - Pilotage AMMO maitre d\'oeuvre' },
    { src: '/renovation.png', alt: 'Transformation facade La Reunion - Coordination travaux AMMO' },
    { src: '/renovation.png', alt: 'Renovation cuisine moderne 974 - Maitrise d\'oeuvre AMMO' },
    { src: '/renovation.png', alt: 'Renovation salle de bain La Reunion - Suivi chantier AMMO' },
    { src: '/renovation.png', alt: 'Amenagement terrasse renovation - Maitre d\'oeuvre La Reunion' },
    { src: '/renovation.png', alt: 'Finitions renovation complete 974 - Qualite AMMO' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Maitrise d\'oeuvre renovation complete',
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
            description: 'Service complet de maitrise d\'oeuvre pour la renovation complete de maisons et appartements a La Reunion. Coordination de tous les corps de metier, mise aux normes, pilotage projet.',
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
                    href="/#contact"
                    className="inline-block bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Demander une Étude Gratuite
                  </a>
                  <a
                    href="/#realisations"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
                  >
                    Voir nos Rénovations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Maitrise d'Oeuvre Renovation */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Maitrise d'Oeuvre pour Votre Projet de Renovation
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  En tant que <strong>maitre d'oeuvre specialise en renovation</strong> a La Reunion, AMMO assure la
                  <strong> coordination complete de votre projet de transformation</strong>. Notre expertise en maitrise d'oeuvre
                  vous garantit un suivi rigoureux du chantier, le respect de votre budget initial et la conformite aux normes
                  en vigueur (RE2020, accessibilite, securite).
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Notre role de <strong>maitre d'oeuvre</strong> commence des le diagnostic initial et se poursuit jusqu'a la
                  reception des travaux. Nous gerons l'ensemble des aspects techniques, administratifs et financiers, vous
                  offrant ainsi une <strong>tranquillite d'esprit totale</strong> tout au long de votre projet de renovation.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-amber-50 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Coordination Artisans</h3>
                    <p className="text-gray-600">Selection et pilotage de tous les corps de metier pour votre renovation</p>
                  </div>
                  <div className="text-center p-6 bg-amber-50 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Suivi Budget & Delais</h3>
                    <p className="text-gray-600">Maitrise des couts et respect du planning etabli</p>
                  </div>
                  <div className="text-center p-6 bg-amber-50 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mise aux Normes</h3>
                    <p className="text-gray-600">Conformite RE2020 et reglementations locales</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Pourquoi Choisir un Maitre d'Oeuvre pour Votre Renovation ?</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span>Pilotage complet de la renovation de A a Z</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span>Economies grace a notre reseau d'artisans qualifies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span>Garantie de conformite technique et reglementaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span>Protection juridique avec assurance decennale MOE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}

        {/* Services Complémentaires */}
        <RelatedServices
          services={[
            {
              title: "Extension Maison",
              description: "Votre rénovation complète ne suffit plus ? Gagnez de l'espace avec une extension. Suite parentale, bureau indépendant, pool house. Même expertise, mêmes garanties, continuité parfaite avec votre rénovation.",
              linkText: "Agrandir votre Maison",
              href: "/maitrise-oeuvre/extension-maison-reunion",
              image: "/extension.png",
              imageAlt: "Extension maison La Reunion - Agrandissement apres renovation"
            },
            {
              title: "Aménagement Extérieur",
              description: "Complétez votre rénovation intérieure par des extérieurs à la hauteur. Terrasse bois composite, piscine moderne, jardin zen. L'harmonie parfaite entre votre maison rénovée et son écrin extérieur.",
              linkText: "Rénover vos Extérieurs",
              href: "/maitrise-oeuvre/amenagement-exterieur-reunion",
              image: "/amenagement exterieur.png",
              imageAlt: "Amenagement exterieur renovation La Reunion - Terrasse et jardin"
            }
          ]}
        />
        <AnimatedSectionsRenovation />
      </main>
      <Footer />
    </>
  )
}