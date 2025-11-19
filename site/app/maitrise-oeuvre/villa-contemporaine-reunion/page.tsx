import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxVilla } from '@/components/zoom-parallax-villa'
import AnimatedSectionsVilla from '@/components/animated-sections-villa'
import { RelatedServices } from '@/components/related-services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maitrise d\'Oeuvre Villa Contemporaine La Reunion | AMMO 974',
  description: 'Specialiste maitrise d\'oeuvre pour construction de villa contemporaine a La Reunion. Architecture bioclimatique tropicale, design sur-mesure. Devis gratuit.',
  keywords: 'maitrise d\'oeuvre villa contemporaine, construction villa La Reunion, villa moderne 974, architecte villa tropicale, maitre d\'oeuvre construction neuve',
  openGraph: {
    title: 'Maitrise d\'Oeuvre Villa Contemporaine La Reunion',
    description: 'Expert maitrise d\'oeuvre pour votre projet de villa contemporaine tropicale. Pilotage complet de A a Z.',
    url: 'https://ammo.re/maitrise-oeuvre/villa-contemporaine-reunion',
    siteName: 'AMMO Maitrise d\'Oeuvre',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/villamoderne.png', width: 1200, height: 630, alt: 'Villa Contemporaine La Reunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/maitrise-oeuvre/villa-contemporaine-reunion',
  },
}

export default function VillaContemporainePage() {
  const images = [
    { src: '/villamoderne.png', alt: 'Maitrise d\'oeuvre villa contemporaine La Reunion - Vue exterieure par AMMO' },
    { src: '/villamoderne.png', alt: 'Architecture villa moderne tropicale La Reunion - Maitrise d\'oeuvre AMMO' },
    { src: '/villamoderne.png', alt: 'Construction villa avec piscine La Reunion - Pilotage AMMO' },
    { src: '/villamoderne.png', alt: 'Interieur villa contemporaine La Reunion - Coordination AMMO' },
    { src: '/villamoderne.png', alt: 'Amenagement jardin villa tropicale 974 - Maitrise d\'oeuvre' },
    { src: '/villamoderne.png', alt: 'Terrasse villa contemporaine La Reunion - Suivi chantier AMMO' },
    { src: '/villamoderne.png', alt: 'Villa moderne illuminee La Reunion - Realisation AMMO maitre d\'oeuvre' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Maitrise d\'oeuvre construction villa contemporaine',
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
            description: 'Service complet de maitrise d\'oeuvre pour la construction de villas contemporaines a La Reunion. Architecture bioclimatique adaptee au climat tropical, pilotage de projet de A a Z.',
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
      <main className="min-h-screen bg-background">
        <section className="relative">
          <ZoomParallaxVilla images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
                Villa Contemporaine
              </h1>
              <p className="text-xl lg:text-2xl text-secondary mb-12">
                Architecture moderne et design personnalisé
              </p>
            </div>
          </div>
        </section>

        {/* Section Excellence */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
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
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Nos villas contemporaines incarnent le luxe et le raffinement adaptés au climat tropical
                    de La Réunion. Chaque projet est une œuvre unique, conçue pour fusionner harmonieusement
                    avec son environnement tout en offrant un confort de vie exceptionnel.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Notre approche architecturale privilégie les espaces ouverts, la lumière naturelle et
                    la ventilation croisée. Nous créons des villas qui respirent, où l'intérieur et l'extérieur
                    se fondent naturellement pour profiter pleinement du cadre exceptionnel de l'île.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chaque villa est pensée dans ses moindres détails : de l'orientation optimale pour capter
                    les alizés, au choix des matériaux nobles résistants au climat tropical, en passant par
                    l'intégration harmonieuse dans le paysage réunionnais.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-muted/30 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Design & Architecture</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Architecture bioclimatique</strong>
                        <p className="text-muted-foreground">Conception optimisée pour le confort tropical naturel</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Baies vitrées XXL</strong>
                        <p className="text-muted-foreground">Ouvertures panoramiques pour une vue exceptionnelle</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Espaces modulables</strong>
                        <p className="text-muted-foreground">Pièces évolutives selon vos besoins et envies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Toiture végétalisée</strong>
                        <p className="text-muted-foreground">Option écologique pour une isolation naturelle</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Prestations Haut de Gamme</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Domotique complète</strong>
                        <p className="text-muted-foreground">Maison intelligente avec contrôle centralisé</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Piscine à débordement</strong>
                        <p className="text-muted-foreground">Design sur-mesure avec système de filtration écologique</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Suite parentale luxueuse</strong>
                        <p className="text-muted-foreground">Dressing, salle de bain spa, terrasse privative</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Cuisine d'architecte</strong>
                        <p className="text-muted-foreground">Équipements premium et îlot central design</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">Créons Ensemble Votre Villa d'Exception</h3>
                <p className="text-xl mb-8 opacity-95">
                  Consultation gratuite avec notre architecte pour concevoir la villa de vos rêves
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contact"
                    className="inline-block bg-background text-secondary font-bold py-4 px-8 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    Réserver une Consultation
                  </a>
                  <a
                    href="/#realisations"
                    className="inline-block border-2 border-primary-foreground text-primary-foreground font-bold py-4 px-8 rounded-lg hover:bg-background hover:text-secondary transition-colors"
                  >
                    Voir nos Villas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Maitrise d'Oeuvre */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Notre Role de Maitre d'Oeuvre pour Votre Villa
              </h2>
              <div className="bg-background rounded-2xl p-8 shadow-lg mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  En tant que <strong>maitre d'oeuvre specialise</strong> dans la construction de villas contemporaines a La Reunion,
                  AMMO assure le <strong>pilotage complet de votre projet</strong> de construction. De la conception architecturale initiale
                  jusqu'a la remise des cles, nous coordonnons l'ensemble des intervenants et garantissons le respect des delais,
                  du budget et de la qualite.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-secondary/10 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Pilotage de Projet</h3>
                    <p className="text-muted-foreground">Coordination de tous les corps de metier et suivi quotidien du chantier</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/10 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Controle Qualite</h3>
                    <p className="text-muted-foreground">Verification a chaque etape et respect des normes RE2020</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/10 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Gestion Administrative</h3>
                    <p className="text-muted-foreground">Permis de construire, declarations, reception des travaux</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-foreground to-muted rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Les Avantages de la Maitrise d'Oeuvre AMMO</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Interlocuteur unique pour tout votre projet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Garantie du respect des delais et du budget</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Expertise technique et reglementaire locale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Suivi personnalise et transparence totale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Complémentaires */}
        <RelatedServices
          services={[
            {
              title: "Lodge de Luxe",
              description: "Passez de la villa personnelle au lodge locatif haut de gamme. Notre expertise en construction de villas contemporaines s'étend naturellement aux lodges Paradise : hébergements touristiques premium avec ROI de 15-20% par an.",
              linkText: "Découvrir les Lodges Paradise",
              href: "/maitrise-oeuvre/lodge-luxe-reunion",
              image: "/lodgedeluxe.png",
              imageAlt: "Lodge de luxe La Reunion - Investissement locatif premium"
            },
            {
              title: "Aménagement Extérieur",
              description: "Sublimez votre villa contemporaine avec des aménagements extérieurs sur-mesure : piscine à débordement, terrasse bois exotique, cuisine d'été, kiosque tropical. L'écrin parfait pour votre architecture moderne.",
              linkText: "Explorer nos Aménagements",
              href: "/maitrise-oeuvre/amenagement-exterieur-reunion",
              image: "/amenagement exterieur.png",
              imageAlt: "Amenagement exterieur villa La Reunion - Piscine et terrasse"
            }
          ]}
        />

        {/* Animated Sections */}
        <AnimatedSectionsVilla />
      </main>
      <Footer />
    </>
  )
}