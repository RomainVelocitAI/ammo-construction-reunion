'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Hammer, Paintbrush, LayoutGrid, Armchair, Building2 } from 'lucide-react'

const easeOut = [0.22, 1, 0.36, 1] as const

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easeOut },
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
}

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
}

const services = [
  {
    title: 'Rénovation complète et partielle',
    description: 'Transformation intégrale ou ciblée de vos espaces, dans le respect de vos exigences et de votre budget.',
    icon: Hammer,
    image: '/btp-renovation-complete.jpg',
  },
  {
    title: 'Peinture intérieure et extérieure',
    description: 'Finitions impeccables et choix de teintes adaptés au climat réunionnais pour sublimer votre habitat.',
    icon: Paintbrush,
    image: '/btp-peinture.jpg',
  },
  {
    title: 'Agencement et aménagement intérieur',
    description: 'Optimisation de chaque mètre carré avec des solutions sur mesure alliant esthétique et fonctionnalité.',
    icon: LayoutGrid,
    image: '/btp-agencement.jpg',
  },
  {
    title: 'Meubles sur mesure',
    description: 'Création de mobilier unique, parfaitement intégré à votre espace et fabriqué avec des matériaux de qualité.',
    icon: Armchair,
    image: '/methodo-realisation.jpg',
  },
  {
    title: 'Gros œuvre et second œuvre',
    description: 'Maçonnerie, structure, charpente et tous les corps de métier pour une construction solide et pérenne.',
    icon: Building2,
    image: '/service-construction.jpg',
  },
]

export default function AmmoBtpContent() {
  return (
    <div className="min-h-screen bg-[#F2ECE7]">
      {/* ══════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-24 sm:pt-28 lg:pt-36">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-ammo-btp.jpg"
            alt="AMMO BTP - Rénovation et gros œuvre à La Réunion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Decorative line */}
        <motion.div
          className="absolute top-32 sm:top-40 left-6 sm:left-12 lg:left-20 w-[2px] bg-gradient-to-b from-[#D6B363] to-transparent"
          initial={{ height: 0 }}
          animate={{ height: '40%' }}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOut }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/logo-ammo-noir.svg"
                alt="AMMO"
                width={160}
                height={50}
                className="h-10 sm:h-12 w-auto mb-8 brightness-0 invert opacity-80"
              />
            </motion.div>

            <motion.span
              className="inline-block px-5 py-2 border border-[#D6B363]/60 text-[#D6B363] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Pôle Rénovation & Construction
            </motion.span>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
            >
              AMMO
              <br />
              <span className="bg-gradient-to-r from-[#D6B363] via-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent">
                BTP
              </span>
            </motion.h1>

            <motion.p
              className="font-subheading text-xl sm:text-2xl lg:text-3xl text-white/80 tracking-wide uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Rénovation, gros œuvre et second œuvre
            </motion.p>

            <motion.p
              className="font-body text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              AMMO BTP prend en charge vos projets de rénovation complète ou partielle, peinture, agencement et meubles sur mesure. Du petit chantier au projet ambitieux, notre équipe coordonne l'ensemble des corps de métier pour garantir qualité et respect des délais.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES GRID
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F2ECE7]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div className="text-center mb-16 sm:mb-20" {...fadeInUp}>
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#BD9C69]/10 to-[#D6B363]/10 border border-[#BD9C69]/30 text-[#BD9C69] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] rounded-full mb-6">
              Nos expertises
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight mb-6">
              Savoir-Faire
              <span className="bg-gradient-to-r from-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent"> BTP</span>
            </h2>
            <p className="font-body text-lg text-[#605E5B] max-w-2xl mx-auto">
              Un interlocuteur unique pour coordonner l'ensemble de vos travaux de construction et de rénovation.
            </p>
          </motion.div>

          {/* Row 1: 3 cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8"
            {...staggerContainer}
          >
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  {...staggerItem}
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BD9C69] to-[#D6B363] flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#605E5B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#BD9C69] to-[#D6B363] group-hover:w-full transition-all duration-500" />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Row 2: 2 cards with images */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            {...staggerContainer}
          >
            {services.slice(3).map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  {...staggerItem}
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BD9C69] to-[#D6B363] flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#605E5B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#BD9C69] to-[#D6B363] group-hover:w-full transition-all duration-500" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VALUE PROPOSITION
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D6B363]/40" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D6B363]/40" />
                <Image
                  src="/btp-agencement.jpg"
                  alt="Interlocuteur unique AMMO BTP"
                  width={600}
                  height={500}
                  className="rounded-xl object-cover w-full shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
                Votre interlocuteur
                <span className="bg-gradient-to-r from-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent"> unique</span>
              </h2>
              <div className="space-y-4 font-body text-[#605E5B] text-base sm:text-lg leading-relaxed">
                <p>
                  Avec AMMO BTP, plus besoin de multiplier les contacts et les devis. Nous coordonnons l'ensemble des corps de métier nécessaires à votre projet.
                </p>
                <p>
                  De la maçonnerie à la peinture, de l'agencement au mobilier sur mesure, un seul référent vous accompagne du premier coup de pioche à la remise des clés.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: '100%', label: 'Coordination intégrée' },
                  { value: '1', label: 'Interlocuteur unique' },
                  { value: 'RE2020', label: 'Normes respectées' },
                  { value: '974', label: 'Expertise locale' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-[#F2ECE7] border border-[#BD9C69]/10"
                  >
                    <p className="font-heading text-2xl sm:text-3xl text-[#BD9C69]">{stat.value}</p>
                    <p className="font-body text-xs sm:text-sm text-[#605E5B] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D6B363]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#BD9C69]/10 to-transparent rounded-full blur-3xl" />

        <motion.div
          className="container mx-auto px-6 sm:px-12 lg:px-20 text-center max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
            Votre projet mérite
            <span className="bg-gradient-to-r from-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent"> l'excellence</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#605E5B] max-w-2xl mx-auto mb-10">
            Rénovation, construction ou aménagement — discutons ensemble de votre projet. Notre équipe AMMO BTP est prête à vous accompagner.
          </p>
          <Link
            href="/#contact"
            className="inline-block relative px-10 sm:px-14 py-4 sm:py-5 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#BD9C69] via-[#D6B363] to-[#BD9C69]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#D6B363] via-[#BD9C69] to-[#D6B363] opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
            </span>
            <span className="relative font-subheading text-primary-foreground font-semibold text-base sm:text-lg tracking-[0.25em] uppercase">
              Prendre Contact
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
