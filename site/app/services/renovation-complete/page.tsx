import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ZoomParallaxRenovation } from '@/components/zoom-parallax-renovation'
import AnimatedSectionsRenovation from '@/components/animated-sections-renovation'
import { RelatedServices } from '@/components/related-services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rénovation Complète à La Réunion | Groupe AMMO',
  description: 'Contractant général pour votre rénovation complète à La Réunion. Transformation maison, mise aux normes RE2020, pilotage projet. Prenez contact dès maintenant.',
  keywords: 'rénovation complète La Réunion, contractant général rénovation, transformation maison 974, mise aux normes RE2020, rénovation case créole',
  openGraph: {
    title: 'Rénovation Complète à La Réunion | Groupe AMMO',
    description: 'Contractant général pour votre rénovation complète. Pilotage complet, coordination artisans, respect budget et délais.',
    url: 'https://ammo.re/services/renovation-complete',
    siteName: 'Groupe AMMO',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://ammo.re/renovation.png', width: 1200, height: 630, alt: 'Rénovation Complète La Réunion par AMMO' }],
  },
  alternates: {
    canonical: 'https://ammo.re/services/renovation-complete',
  },
}

export default function RenovationCompletePage() {
  const images = [
    { src: '/renovation.jpg', alt: 'Rénovation complète La Réunion - Avant/Après par AMMO contractant général' },
    { src: '/btp-renovation-complete.jpg', alt: 'Rénovation intérieur maison La Réunion - Pilotage AMMO' },
    { src: '/btp-peinture.jpg', alt: 'Peinture façade rénovation La Réunion - Coordination AMMO' },
    { src: '/btp-agencement.jpg', alt: 'Agencement intérieur rénovation 974 - AMMO contractant général' },
    { src: '/methodo-realisation.jpg', alt: 'Réalisation chantier rénovation La Réunion - Suivi AMMO' },
    { src: '/service-renovation.jpg', alt: 'Service rénovation complète 974 - Contractant général AMMO' },
    { src: '/construction.jpg', alt: 'Finitions rénovation complète La Réunion - Qualité AMMO' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Rénovation complète',
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
            description: 'Service complet de contractant général pour la rénovation complète de maisons et appartements à La Réunion. Coordination de tous les corps de métier, mise aux normes, pilotage projet.',
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
          <ZoomParallaxRenovation images={images} />
        </section>
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
                Rénovation Complète
              </h1>
              <p className="text-xl lg:text-2xl text-secondary mb-12">
                Transformation totale de votre habitat
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Renaissance de Votre Patrimoine Immobilier
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nous redonnons vie à votre bien immobilier avec une approche complète de rénovation.
                De la conception à la finition, chaque détail est pensé pour moderniser votre espace
                tout en respectant son caractère unique et en optimisant sa performance énergétique.
              </p>
            </div>
          </div>
        </section>

        {/* Section Transformation */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Transformation Complète de Votre Habitat
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    La rénovation complète est bien plus qu'un simple rafraîchissement. C'est une transformation
                    profonde qui redonne vie à votre bien, améliore votre confort de vie et augmente significativement
                    la valeur de votre patrimoine immobilier.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Notre équipe pluridisciplinaire prend en charge l'intégralité de votre projet : du diagnostic
                    initial aux finitions les plus minutieuses. Nous coordonnons tous les corps de métier pour
                    garantir un résultat impeccable dans les délais convenus.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
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
                <div className="bg-muted/30 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Diagnostic & Planification</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Diagnostic complet du bâti</strong>
                        <p className="text-muted-foreground">Analyse structurelle, thermique et technique approfondie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Mise aux normes RE2020</strong>
                        <p className="text-muted-foreground">Conformité réglementaire et performance énergétique optimale</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Optimisation énergétique</strong>
                        <p className="text-muted-foreground">Réduction de 40% minimum de votre consommation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <div>
                        <strong className="text-foreground">Valorisation du patrimoine</strong>
                        <p className="text-muted-foreground">Augmentation de la valeur de votre bien jusqu'à 30%</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Corps de Métiers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Gros œuvre et structure</strong>
                        <p className="text-muted-foreground">Maçonnerie, charpente, toiture, fondations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Isolation et étanchéité</strong>
                        <p className="text-muted-foreground">Protection thermique et acoustique haute performance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Plomberie et électricité</strong>
                        <p className="text-muted-foreground">Installation complète aux normes actuelles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Finitions et décoration</strong>
                        <p className="text-muted-foreground">Peinture, sols, menuiseries, aménagements sur-mesure</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">Transformez Votre Bien en Véritable Joyau</h3>
                <p className="text-xl mb-8 opacity-95">
                  Contactez-nous pour discuter de votre projet de rénovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contact"
                    className="inline-block bg-background text-secondary font-bold py-4 px-8 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    Prendre Contact
                  </a>
                  <a
                    href="/#realisations"
                    className="inline-block border-2 border-primary-foreground text-primary-foreground font-bold py-4 px-8 rounded-lg hover:bg-background hover:text-secondary transition-colors"
                  >
                    Voir nos Rénovations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Accompagnement Projet */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Un Accompagnement Global pour Votre Rénovation
              </h2>
              <div className="bg-background rounded-2xl p-8 shadow-lg mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  En tant que <strong>contractant général spécialisé en rénovation</strong> à La Réunion, AMMO assure la
                  <strong> coordination complète de votre projet de transformation</strong>. Notre expertise
                  vous garantit un suivi rigoureux du chantier, le respect de votre budget initial et la conformité aux normes
                  en vigueur (RE2020, accessibilité, sécurité).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Notre accompagnement commence dès le diagnostic initial et se poursuit jusqu'à la
                  réception des travaux. Nous gérons l'ensemble des aspects techniques, administratifs et financiers, vous
                  offrant ainsi une <strong>tranquillité d'esprit totale</strong> tout au long de votre projet de rénovation.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-secondary/10 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Coordination Artisans</h3>
                    <p className="text-muted-foreground">Sélection et pilotage de tous les corps de métier pour votre rénovation</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/10 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Suivi Budget & Délais</h3>
                    <p className="text-muted-foreground">Maîtrise des coûts et respect du planning établi</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/10 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-3">Mise aux Normes</h3>
                    <p className="text-muted-foreground">Conformité RE2020 et réglementations locales</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-foreground to-muted rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Pourquoi Choisir un Contractant Général pour Votre Rénovation ?</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Pilotage complet de la rénovation de A à Z</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Économies grâce à notre réseau d'artisans qualifiés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Garantie de conformité technique et réglementaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl">✓</span>
                    <span>Protection juridique avec assurance décennale</span>
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
              title: "Extension Sur-Mesure",
              description: "Votre rénovation complète ne suffit plus ? Gagnez de l'espace avec une extension. Suite parentale, bureau indépendant, pool house. Même expertise, mêmes garanties, continuité parfaite avec votre rénovation.",
              linkText: "Agrandir votre Maison",
              href: "/services/extension-sur-mesure",
              image: "/extension.png",
              imageAlt: "Extension maison La Réunion - Agrandissement après rénovation"
            },
            {
              title: "Aménagement Extérieur",
              description: "Complétez votre rénovation intérieure par des extérieurs à la hauteur. Terrasse bois composite, piscine moderne, jardin zen. L'harmonie parfaite entre votre maison rénovée et son écrin extérieur.",
              linkText: "Rénover vos Extérieurs",
              href: "/services/amenagement-exterieur",
              image: "/amenagement exterieur.png",
              imageAlt: "Aménagement extérieur rénovation La Réunion - Terrasse et jardin"
            }
          ]}
        />
        <AnimatedSectionsRenovation />
      </main>
      <Footer />
    </>
  )
}
