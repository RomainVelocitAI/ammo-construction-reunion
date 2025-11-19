import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxLodge } from '@/components/zoom-parallax-lodge'
import AnimatedSectionsLodge from '@/components/animated-sections-lodge'
import { RelatedServices } from '@/components/related-services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maitrise d\'Oeuvre Lodge de Luxe La Reunion | AMMO Paradise',
  description: 'Expert maitrise d\'oeuvre lodge de luxe La Reunion. Construction lodge premium, bungalow tropical haut de gamme. Pilotage projet complet.',
  keywords: 'maitrise d\'oeuvre lodge luxe, construction lodge La Reunion, bungalow premium 974, maitre d\'oeuvre lodge paradise, villa luxe tropicale',
  openGraph: {
    title: 'Maitrise d\'Oeuvre Lodge de Luxe La Reunion',
    description: 'Specialiste maitrise d\'oeuvre pour lodges de luxe tropicaux. Coordination complete, qualite premium.',
    url: 'https://ammo.re/maitrise-oeuvre/lodge-luxe-reunion',
    siteName: 'AMMO Maitrise d\'Oeuvre',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/lodgedeluxe.png', width: 1200, height: 630, alt: 'Lodge de Luxe La Reunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/maitrise-oeuvre/lodge-luxe-reunion',
  },
}

export default function LodgeDeLuxePage() {
  const images = [
    { src: '/lodgedeluxe.png', alt: 'Maitrise d\'oeuvre lodge de luxe La Reunion - Vue panoramique AMMO' },
    { src: '/lodgedeluxe.png', alt: 'Interieur lodge premium 974 - Pilotage AMMO maitre d\'oeuvre' },
    { src: '/lodgedeluxe.png', alt: 'Suite master lodge tropical La Reunion - Coordination AMMO' },
    { src: '/lodgedeluxe.png', alt: 'Terrasse privee lodge luxe 974 - Maitrise d\'oeuvre AMMO' },
    { src: '/lodgedeluxe.png', alt: 'Spa lodge tropical La Reunion - Suivi chantier AMMO' },
    { src: '/lodgedeluxe.png', alt: 'Vue ocean lodge paradise 974 - Maitre d\'oeuvre' },
    { src: '/lodgedeluxe.png', alt: 'Lodge luxe illumine La Reunion - Qualite AMMO' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Maitrise d\'oeuvre lodge de luxe',
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
            description: 'Service complet de maitrise d\'oeuvre pour la construction de lodges de luxe et bungalows premium a La Reunion. Pilotage projet haut de gamme.',
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
          <ZoomParallaxLodge images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
                Lodge de Luxe
              </h1>
              <p className="text-xl lg:text-2xl text-secondary mb-12">
                Hébergements touristiques haut de gamme
              </p>
            </div>
          </div>
        </section>

        {/* Section Lodge Paradise */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Lodge Paradise : L'Expérience Ultime du Luxe Tropical
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Créez une expérience d'hébergement inoubliable avec nos lodges de luxe. Conçus pour
                    le tourisme haut de gamme et les locations saisonnières d'exception, nos lodges
                    allient confort moderne, design épuré et intégration harmonieuse dans les plus
                    beaux sites de La Réunion.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Chaque lodge est une œuvre architecturale unique, pensée pour offrir une immersion
                    totale dans la beauté naturelle de l'île tout en garantissant intimité, confort
                    absolu et prestations 5 étoiles. Un investissement rentable pour les propriétaires
                    et une expérience mémorable pour les visiteurs.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
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
                <div className="bg-muted/30 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Concept Lodge Paradise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Architecture bioclimatique</strong>
                        <p className="text-muted-foreground">Design tropical adapté au climat de l'île</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Matériaux premium</strong>
                        <p className="text-muted-foreground">Bois nobles, pierre volcanique, finitions luxe</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Équipements 5 étoiles</strong>
                        <p className="text-muted-foreground">Spa, piscine privée, cuisine équipée haut de gamme</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Autonomie énergétique</strong>
                        <p className="text-muted-foreground">Panneaux solaires et systèmes éco-responsables</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Services Premium</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Gestion locative clé en main</strong>
                        <p className="text-muted-foreground">Conciergerie et maintenance complète</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Marketing touristique</strong>
                        <p className="text-muted-foreground">Référencement sur plateformes premium</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Services aux occupants</strong>
                        <p className="text-muted-foreground">Chef privé, spa, activités exclusives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Garantie rentabilité</strong>
                        <p className="text-muted-foreground">ROI de 15 à 20% par an</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">Investissez dans le Tourisme de Luxe</h3>
                <p className="text-xl mb-8 opacity-95">
                  Étude de rentabilité gratuite pour votre projet de lodge
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contact"
                    className="inline-block bg-background text-secondary font-bold py-4 px-8 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    Étude de Projet Gratuite
                  </a>
                  <a
                    href="/#realisations"
                    className="inline-block border-2 border-primary-foreground text-primary-foreground font-bold py-4 px-8 rounded-lg hover:bg-background hover:text-secondary transition-colors"
                  >
                    Découvrir nos Lodges
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sections */}

        {/* Services Complémentaires */}
        <RelatedServices
          services={[
            {
              title: "Villa Contemporaine",
              description: "Avant d'investir dans un lodge locatif, découvrez nos villas contemporaines. Les mêmes standards d'excellence architecturale, adaptés à votre résidence principale. Architecture tropicale bioclimatique et design sur-mesure.",
              linkText: "Découvrir nos Villas",
              href: "/maitrise-oeuvre/villa-contemporaine-reunion",
              image: "/villamoderne.png",
              imageAlt: "Villa contemporaine La Reunion - Architecture moderne tropicale"
            },
            {
              title: "Promoteurs Professionnels",
              description: "Vous êtes promoteur immobilier ? Nous accompagnons vos projets de lodges en série. Expertise en maitrise d'oeuvre pour promoteurs, optimisation des coûts et respect des délais.",
              linkText: "Solutions pour Promoteurs",
              href: "/maitrise-oeuvre/promoteurs-reunion",
              image: "/promoteurs.png",
              imageAlt: "Maitrise oeuvre promoteurs La Reunion - Projets immobiliers"
            },
            {
              title: "Aménagement Extérieur",
              description: "Maximisez l'attrait touristique de votre lodge avec des aménagements extérieurs premium : piscine chauffée, spa tropical, terrasse sunset, barbecue professionnel. L'argument qui fait la différence.",
              linkText: "Explorer nos Aménagements",
              href: "/maitrise-oeuvre/amenagement-exterieur-reunion",
              image: "/amenagement exterieur.png",
              imageAlt: "Amenagement exterieur lodge La Reunion - Piscine et spa"
            }
          ]}
        />
        <AnimatedSectionsLodge />
      </main>
      <Footer />
    </>
  )
}