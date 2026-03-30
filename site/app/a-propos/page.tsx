'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Clock, Users, Compass, MapPin } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
}

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const team = [
  {
    name: 'Maxence Fontaine',
    badge: 'Direction',
    title: 'Président-Directeur Général',
    photo: '/pdp-maxence.png',
    bio: "Formé à l'EBTP de Vincennes (94), Maxence Fontaine est un professionnel passionné du bâtiment, fort de plus de 10 ans d'expérience en métropole dans la conduite de travaux et la maîtrise d'œuvre. Au fil de son parcours, il a contribué à des projets emblématiques, tels que la Tour SFR à Saint-Denis (93), ainsi qu'à de nombreux programmes de logements neufs et rénovés pour de grands acteurs du secteur tel que Vinci, Rénover et Eiffage. Rigoureux, organisé et déterminé, Maxence met un point d'honneur à assurer la qualité d'exécution sur chacun de ses chantiers. Fédérateur et proche de ses équipes, il favorise la collaboration et la communication entre tous les intervenants du projet.",
    skills: ['Constructions à basse consommation', 'Utilisation raisonnée des matériaux', "Réduction de l'empreinte carbone", 'Respect des normes en vigueur et des DTU'],
    ambition: "Faire évoluer les méthodes de construction pour concilier exigence technique, performance énergétique et respect des valeurs humaines.",
  },
  {
    name: 'Andrew Duchenne',
    badge: 'Direction',
    title: 'Directeur Général',
    photo: '/pdp-andrew.png',
    bio: "Originaire de Belgique, Andrew Duchenne est un entrepreneur chevronné au parcours atypique. Fort d'une solide expérience dans le secteur du bâtiment, il s'est rapidement tourné vers la gestion d'entreprise, alliant vision stratégique et pilotage opérationnel. Installé à La Réunion depuis maintenant 5 ans, il est tombé amoureux de l'île et y a trouvé un terrain idéal pour faire rayonner ses convictions et son savoir-faire. Andrew joue un rôle central dans le développement de l'entreprise et dans l'acquisition de nouveaux marchés. Grâce à sa capacité d'analyse et à sa vision à long terme, il anticipe les besoins du secteur et oriente les projets vers plus d'innovation et de durabilité. Fédérateur, inspirant et à l'écoute, Andrew sait créer une dynamique collective autour de valeurs fortes.",
    skills: ["Réalisation de constructions à faible consommation énergétique", "Choix de matériaux dans une logique d'usage raisonné", "Démarche active de réduction de l'empreinte carbone", 'Conformité aux normes en vigueur et DTU'],
    ambition: "Transformer les pratiques du secteur pour allier rigueur technique, efficacité énergétique et respect des principes humains et responsables.",
  },
  {
    name: 'Angelo Rapazzini',
    badge: 'Direction',
    title: 'Directeur Général',
    photo: '/pdp-angelo.png',
    bio: "Angelo pilote la stratégie commerciale et le développement d'AMMO. Responsable du marketing, des relations institutionnelles et du positionnement de l'entreprise, il assure le lien entre les ambitions de nos clients et les compétences de nos équipes. Son approche allie rigueur de gestion et vision entrepreneuriale pour accompagner la croissance d'AMMO à La Réunion.",
    skills: ['Marketing et communication', 'Développement commercial', 'Relations institutionnelles', 'Positionnement stratégique'],
    ambition: "Positionner le Groupe AMMO comme la référence du bâtiment intégré à La Réunion.",
  },
  {
    name: 'Steve Lesgardeur',
    badge: 'Terrain',
    title: 'Chef de chantier — Second Œuvre & Finitions',
    photo: '/pdp-steve.png',
    bio: "Diplômé en menuiserie depuis plus de 10 ans, Steve a forgé son savoir-faire au fil de projets exigeants, développant une maîtrise complète du travail du bois et des aménagements extérieurs. Installé à La Réunion depuis 2025, il apporte à AMMO une expertise terrain solide et un sens du détail qui se retrouve dans chacune de ses réalisations. En tant que chef de chantier du pôle Second Œuvre & Finitions, Steve assure la coordination des travaux, le suivi qualité et la relation client au quotidien. Passionné et rigoureux, il s'investit personnellement dans chaque projet pour garantir des finitions durables et à la hauteur des attentes.",
    skills: ['Coordination de chantier', 'Menuiserie et travail du bois', 'Relation client', 'Suivi qualité'],
    ambition: "Garantir l'excellence artisanale et la satisfaction client sur chaque chantier AMMO.",
  },
  {
    name: 'Christianus Lokin',
    badge: 'Terrain',
    title: 'Associé',
    photo: '/pdp-christianus.png',
    bio: "Issu de la marine, Christianus a développé une rigueur, un esprit d'équipe et une capacité à gérer des situations exigeantes qui se traduisent aujourd'hui sur le terrain. Tourné vers l'entrepreneuriat, il a choisi de rejoindre AMMO pour construire concrètement. Ce qui le distingue : une énergie positive communicative, une fiabilité à toute épreuve et un vrai sens du collectif. Christianus s'investit au quotidien pour faire avancer les projets et renforcer la cohésion de l'équipe.",
    skills: ["Esprit d'équipe et cohésion", 'Rigueur opérationnelle', 'Gestion de situations exigeantes', 'Initiative et collaboration'],
    ambition: "Contribuer à la croissance d'AMMO en apportant l'énergie et la solidité nécessaires pour relever chaque défi collectivement.",
  },
  {
    name: 'Leo Lemesle',
    badge: 'Terrain',
    title: 'Associé — Second Œuvre & Finitions',
    photo: '/pdp-leo.png',
    bio: "Entrepreneur dans l'âme, Leo a fait ses premières armes dans le commerce en ligne avant de choisir La Réunion pour se réinventer. C'est sur le terrain qu'il trouve sa voie : la rénovation de decks, le traitement du bois et la peinture bâtiment deviennent son quotidien. Chez AMMO, Leo a trouvé bien plus qu'un poste — une équipe solidaire qui lui a permis de révéler son potentiel. Impliqué et volontaire, il monte en compétences chantier après chantier et apporte au pôle Second Œuvre & Finitions une énergie et une détermination qui font la différence.",
    skills: ['Rénovation de decks et terrasses', 'Traitement et protection du bois', 'Peinture bâtiment', 'Travail en équipe'],
    ambition: "Continuer à progresser et contribuer à l'excellence des finitions AMMO sur chaque chantier.",
  },
]

const values = [
  { icon: Shield, title: 'Excellence artisanale', description: 'Un savoir-faire exigeant, des finitions irréprochables sur chaque projet.' },
  { icon: Users, title: 'Transparence', description: 'Communication claire et honnête à chaque étape, sans surprise.' },
  { icon: Clock, title: 'Respect des délais', description: 'Planning rigoureux et engagement ferme sur les dates de livraison.' },
  { icon: Compass, title: 'Interlocuteur unique', description: 'Un seul contact pour tout votre projet, de la conception à la livraison.' },
  { icon: MapPin, title: 'Ancrage réunionnais', description: 'Une connaissance approfondie du territoire, des normes locales et des spécificités climatiques.' },
]

const engagements = [
  'Garantie décennale sur tous nos travaux',
  'Conformité aux normes en vigueur à La Réunion',
  'Respect des DTU (Documents Techniques Unifiés)',
  'Suivi post-livraison et accompagnement',
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-36 xl:pt-44">
        {/* ══════════════════════════════════════════════
            SECTION 1 — Le Groupe AMMO
            ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Le Groupe <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">AMMO</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                À La Réunion, AMMO est le seul groupe à maîtriser l'intégralité de la chaîne de valeur du bâtiment. De la conception de vos plans jusqu'à l'entretien de vos réalisations, en passant par le pilotage de chantier et l'exécution des travaux, vous bénéficiez d'un interlocuteur unique.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Chaque pôle — Conception, Maîtrise d'Œuvre, Contractant Général, Second Œuvre & Finitions — peut intervenir indépendamment ou en synergie avec les autres, selon la nature de votre projet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 2 — Nos Valeurs
            ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-28 bg-muted/20">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Nos Valeurs</h2>
              <p className="text-lg text-muted-foreground">Ce qui guide chacune de nos interventions</p>
            </motion.div>
            <motion.div {...staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {values.map((v) => (
                <motion.div key={v.title} {...staggerItem} className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — Nos Engagements
            ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Nos Engagements</h2>
              <p className="text-lg text-muted-foreground mb-10">Des faits vérifiables, pas des promesses marketing</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {engagements.map((e) => (
                  <div key={e} className="flex items-start gap-3 bg-muted/20 rounded-xl p-5 text-left">
                    <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground font-medium">{e}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — Notre Équipe
            ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-28 bg-muted/20">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Notre Équipe</h2>
              <p className="text-lg text-muted-foreground">6 associés, une vision commune</p>
            </motion.div>

            <div className="space-y-16 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  {...fadeInUp}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}
                >
                  {/* Photo */}
                  <div className="lg:w-2/5 flex-shrink-0">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted/50 shadow-lg">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/10 to-accent/10">
                          <span className="text-6xl font-bold text-secondary/30">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4 uppercase tracking-wider">
                      {member.badge}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-xl text-secondary font-semibold mb-6">{member.title}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                    {member.skills.length > 0 && (
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 mb-4">
                        <h4 className="text-lg font-bold text-foreground mb-3">Compétences</h4>
                        <ul className="space-y-1.5">
                          {member.skills.map((skill) => (
                            <li key={skill} className="flex items-start text-gray-700">
                              <span className="text-accent mr-2 mt-0.5">•</span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.ambition && (
                      <div className="p-5 bg-background rounded-xl border-l-4 border-amber-500 shadow-sm">
                        <p className="text-sm font-semibold text-foreground">Son ambition :</p>
                        <p className="text-gray-700 mt-1">{member.ambition}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — CTA
            ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-amber-50 to-yellow-50">
          <motion.div
            {...fadeInUp}
            className="container mx-auto px-6 text-center max-w-4xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons ensemble de votre projet. Notre équipe est là pour vous accompagner de la conception à la livraison.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-secondary to-accent text-primary-foreground font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Prendre Contact
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
