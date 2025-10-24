'use client'

import { FinancialHero } from '@/components/hero-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function EquipePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-36 xl:pt-44">
        <FinancialHero
          title={
            <>
              <span className="bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                Notre Équipe
              </span>
              <br />
              <span className="text-gray-900">
                L'Excellence au Service de Vos Projets
              </span>
            </>
          }
          description="Une équipe de professionnels passionnés et expérimentés, unis par la même vision : vous accompagner dans la réalisation de projets de construction durables, innovants et respectueux de l'environnement réunionnais."
          buttonText="Nous Contacter"
          buttonLink="/#contact"
          imageUrl1="/hero-equipe-1.webp"
          imageUrl2="/hero-equipe-2.webp"
        />

        {/* Section Maxence Fontaine */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                  className="lg:w-2/5"
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <Image
                      src="/maxence.jpg"
                      alt="Maxence Fontaine - Président-Directeur Général AMMO"
                      width={500}
                      height={600}
                      className="relative rounded-2xl shadow-2xl object-cover w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="lg:w-3/5"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.span
                    variants={fadeInUp}
                    className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-6 uppercase tracking-wider hover:border-amber-600/60 transition-colors duration-300"
                  >
                    Direction
                  </motion.span>
                  <motion.h2
                    variants={fadeInUp}
                    className="text-4xl font-bold text-gray-900 mb-4"
                  >
                    Maxence Fontaine
                  </motion.h2>
                  <motion.p
                    variants={fadeInUp}
                    className="text-2xl text-amber-600 font-semibold mb-6"
                  >
                    Président-Directeur Général
                  </motion.p>

                  <motion.div variants={fadeInUp} className="space-y-4 text-gray-700 text-lg">
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Formé à l'EBTP de Vincennes (94), Maxence Fontaine est un professionnel passionné du bâtiment, fort de plus de 10 ans d'expérience en métropole dans la conduite de travaux et la maîtrise d'œuvre.
                    </p>
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Au fil de son parcours, il a contribué à des projets emblématiques, tels que la Tour SFR à Saint-Denis (93), ainsi qu'à de nombreux programmes de logements neufs et rénovés pour de grands acteurs du secteur tel que Vinci, Rénover et Eiffage.
                    </p>
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Rigoureux, organisé et déterminé, Maxence met un point d'honneur à assurer la qualité d'exécution sur chacun de ses chantiers.
                    </p>
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Fédérateur et proche de ses équipes, il favorise la collaboration et la communication entre tous les intervenants du projet.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Vision pour un bâtiment durable</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Constructions à basse consommation
                      </li>
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Utilisation raisonnée des matériaux
                      </li>
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Réduction de l'empreinte carbone
                      </li>
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Respect des normes RE2020 et des DTU en vigueur
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-6 p-6 bg-white rounded-xl border-l-4 border-amber-500 shadow-md hover:shadow-xl hover:border-l-8 transition-all duration-300"
                  >
                    <p className="text-lg font-semibold text-gray-900">
                      Son ambition :
                    </p>
                    <p className="text-gray-700 mt-2">
                      Faire évoluer les méthodes de construction pour concilier exigence technique, performance énergétique et respect des valeurs humaines.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Andrew Duchenne */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <motion.div
                  className="lg:w-2/5"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <Image
                      src="/andrew.jpg"
                      alt="Andrew Duchenne - Directeur Général AMMO"
                      width={500}
                      height={600}
                      className="relative rounded-2xl shadow-2xl object-cover w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="lg:w-3/5"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.span
                    variants={fadeInUp}
                    className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-6 uppercase tracking-wider hover:border-amber-600/60 transition-colors duration-300"
                  >
                    Direction
                  </motion.span>
                  <motion.h2
                    variants={fadeInUp}
                    className="text-4xl font-bold text-gray-900 mb-4"
                  >
                    Andrew Duchenne
                  </motion.h2>
                  <motion.p
                    variants={fadeInUp}
                    className="text-2xl text-amber-600 font-semibold mb-6"
                  >
                    Directeur Général
                  </motion.p>

                  <motion.div variants={fadeInUp} className="space-y-4 text-gray-700 text-lg">
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Originaire de Belgique, Andrew Duchenne est un entrepreneur chevronné au parcours atypique. Fort d'une solide expérience dans le secteur du bâtiment, il s'est rapidement tourné vers la gestion d'entreprise, alliant vision stratégique et pilotage opérationnel.
                    </p>
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Installé à La Réunion depuis maintenant 5 ans, il est tombé amoureux de l'île et y a trouvé un terrain idéal pour faire rayonner ses convictions et son savoir-faire.
                    </p>
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Andrew joue un rôle central dans le développement de l'entreprise et dans l'acquisition de nouveaux marchés. Grâce à sa capacité d'analyse et à sa vision à long terme, il anticipe les besoins du secteur et oriente les projets vers plus d'innovation et de durabilité.
                    </p>
                    <p className="hover:text-gray-900 transition-colors duration-300">
                      Fédérateur, inspirant et à l'écoute, Andrew sait créer une dynamique collective autour de valeurs fortes. Il place la gestion humaine au cœur de son management, favorisant l'autonomie, la montée en compétences et la cohésion des équipes.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Engagement pour un bâtiment responsable</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Réalisation de constructions à faible consommation énergétique
                      </li>
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Choix de matériaux dans une logique d'usage raisonné
                      </li>
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Démarche active de réduction de l'empreinte carbone
                      </li>
                      <li className="flex items-start hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        Conformité aux exigences de la RE2020 et aux normes DTU
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-6 p-6 bg-white rounded-xl border-l-4 border-amber-500 shadow-md hover:shadow-xl hover:border-l-8 transition-all duration-300"
                  >
                    <p className="text-lg font-semibold text-gray-900">
                      Son objectif :
                    </p>
                    <p className="text-gray-700 mt-2">
                      Transformer les pratiques du secteur pour allier rigueur technique, efficacité énergétique et respect des principes humains et responsables.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
          <motion.div
            className="container mx-auto px-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Discutons ensemble de votre projet de construction ou de rénovation. Notre équipe est là pour vous accompagner.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Demander un Devis Gratuit
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
