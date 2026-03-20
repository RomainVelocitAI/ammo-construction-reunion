import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxAmenagement } from '@/components/zoom-parallax-amenagement'
import AnimatedSectionsAmenagement from '@/components/animated-sections-amenagement'
import { RelatedServices } from '@/components/related-services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aménagement Extérieur à La Réunion | AMMO Contractant Général',
  description: 'Contractant général pour votre aménagement extérieur à La Réunion. Terrasses, piscines, jardins tropicaux, kiosques. Pilotage projet complet. Prenez contact.',
  keywords: 'aménagement extérieur La Réunion, terrasse La Réunion, piscine 974, jardin tropical, contractant général paysagiste, cuisine extérieure La Réunion, kiosque tropical',
  openGraph: {
    title: 'Aménagement Extérieur à La Réunion | AMMO Contractant Général',
    description: 'Contractant général pour vos espaces extérieurs tropicaux. Coordination complète, respect budget et délais.',
    url: 'https://ammo.re/services/amenagement-exterieur',
    siteName: 'AMMO Contractant Général',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/amenagement exterieur.png', width: 1200, height: 630, alt: 'Aménagement Extérieur La Réunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/services/amenagement-exterieur',
  },
}

export default function AmenagementExterieurPage() {
  const images = [
    { src: '/amenagement exterieur.png', alt: 'Aménagement extérieur La Réunion - Vue ensemble AMMO contractant général' },
    { src: '/amenagement exterieur.png', alt: 'Construction piscine tropicale 974 - Pilotage AMMO' },
    { src: '/amenagement exterieur.png', alt: 'Jardin tropical paysage La Réunion - Coordination travaux AMMO' },
    { src: '/amenagement exterieur.png', alt: 'Terrasse bois exotique 974 - AMMO contractant général' },
    { src: '/amenagement exterieur.png', alt: 'Éclairage extérieur jardin La Réunion - Suivi chantier AMMO' },
    { src: '/amenagement exterieur.png', alt: 'Pergola sur-mesure 974 - Contractant général La Réunion' },
    { src: '/amenagement exterieur.png', alt: 'Espace détente extérieur tropical - Qualité AMMO' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Aménagement extérieur',
            provider: {
              '@type': 'GeneralContractor',
              name: 'AMMO',
              telephone: '+262693638656',
              email: 'info@ammo.re',
            },
            areaServed: {
              '@type': 'State',
              name: 'La Reunion',
            },
            description: 'Service complet de contractant général pour l\'aménagement d\'espaces extérieurs à La Réunion. Conception et réalisation de terrasses, piscines, jardins tropicaux et cuisines extérieures et kiosques.',
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
          <ZoomParallaxAmenagement images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
                Aménagement Extérieur
              </h1>
              <p className="text-xl lg:text-2xl text-secondary mb-12">
                Terrasses, piscines, jardins paysagers et kiosques tropicaux
              </p>
            </div>
          </div>
        </section>

        {/* Section Créez Votre Paradis Tropical */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Créez Votre Paradis Tropical Extérieur
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Transformez vos espaces extérieurs en véritables oasis de détente. Nous concevons
                    et réalisons des aménagements qui subliment votre propriété tout en s'adaptant
                    parfaitement au climat tropical de La Réunion. De la piscine au jardin paysager,
                    chaque élément est pensé pour créer une harmonie parfaite entre nature et confort.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Notre expertise locale nous permet de sélectionner les matériaux les plus résistants
                    aux conditions climatiques de l'île : bois traités anti-termites, pierres volcaniques
                    locales, végétaux adaptés au climat tropical. Chaque projet est unique et conçu pour
                    résister aux cyclones tout en offrant un espace de vie exceptionnel.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Grâce à notre équipe d'experts qualifiés dans l'aménagement extérieur à La Réunion, nous
                    maîtrisons parfaitement les contraintes techniques et réglementaires locales pour
                    transformer votre vision en réalité.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/amenagement exterieur.png"
                    alt="Aménagement extérieur tropical"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-muted/30 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Nos Spécialités</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Piscines & Spas</strong>
                        <p className="text-muted-foreground">Bassins sur-mesure adaptés au climat tropical</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Jardins Paysagers</strong>
                        <p className="text-muted-foreground">Création d'espaces verts harmonieux</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Terrasses & Pergolas</strong>
                        <p className="text-muted-foreground">Espaces de vie extérieurs confortables</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Cuisines d'Été</strong>
                        <p className="text-muted-foreground">Aménagements conviviaux pour recevoir</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Kiosques Tropicaux</strong>
                        <p className="text-muted-foreground">Abris en bois exotique pour se détendre</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Nos Garanties</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Expertise tous corps de métier</strong>
                        <p className="text-muted-foreground">Connaissance parfaite du climat réunionnais</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Matériaux résistants</strong>
                        <p className="text-muted-foreground">Sélection rigoureuse anti-cyclonique</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Garantie 10 ans</strong>
                        <p className="text-muted-foreground">Structure et étanchéité garanties</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Service après-vente</strong>
                        <p className="text-muted-foreground">Entretien et maintenance assurés</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">Commencez Votre Projet d'Aménagement</h3>
                <p className="text-xl mb-8 opacity-95">
                  Consultation gratuite avec notre architecte paysagiste
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contact"
                    className="inline-block bg-background text-secondary font-bold py-4 px-8 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    Prendre Contact
                  </a>
                  <a
                    href="tel:+262693638656"
                    className="inline-block border-2 border-primary-foreground text-primary-foreground font-bold py-4 px-8 rounded-lg hover:bg-background hover:text-secondary transition-colors"
                  >
                    Appeler un Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Complémentaires */}
        <RelatedServices
          sectionTitle="Nos Autres Services"
          services={[
            {
              title: "Rénovation Complète",
              description: "Modernisation intérieure de votre maison. Après avoir rénové l'intérieur, sublimez vos extérieurs : nouvelle terrasse, piscine moderne, jardin paysager. La cohérence parfaite dedans-dehors.",
              linkText: "Rénover votre Maison",
              href: "/services/renovation-complete",
              image: "/renovation.png",
              imageAlt: "Rénovation complète La Réunion - Avec extérieurs"
            },
            {
              title: "Extension Sur-Mesure",
              description: "Agrandissement de votre habitation. Votre extension gagne à être prolongée vers l'extérieur : nouvelle terrasse attenante, pergola bioclimatique, jardin zen. Profitez pleinement de l'espace créé.",
              linkText: "Agrandir votre Maison",
              href: "/services/extension-sur-mesure",
              image: "/extension.png",
              imageAlt: "Extension maison La Réunion - Avec nouveaux extérieurs"
            },
            {
              title: "Projets d'envergure",
              description: "Pour vos projets de grande ampleur, AMMO mobilise son expertise de contractant général pour coordonner l'ensemble des intervenants et garantir des résultats à la hauteur de vos ambitions.",
              linkText: "Découvrir",
              href: "/services/projets-envergure",
              image: "/villamoderne.png",
              imageAlt: "Projets d'envergure La Réunion - AMMO contractant général"
            }
          ]}
        />


        {/* Animated Sections */}
        <AnimatedSectionsAmenagement />
      </main>
      <Footer />
    </>
  )
}
