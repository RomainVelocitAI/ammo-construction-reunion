'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PenTool, Box, FileCheck, Calculator, MessageCircle } from 'lucide-react'

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
    title: 'Plans architecturaux',
    description: 'Conception de plans détaillés et cotés, de l\'esquisse au dossier d\'exécution, en conformité avec les normes locales.',
    icon: PenTool,
    image: '/conception-plans.jpg',
  },
  {
    title: 'Modélisation 3D',
    description: 'Visualisez votre projet avant sa réalisation grâce à des rendus 3D photoréalistes et des visites virtuelles immersives.',
    icon: Box,
    image: '/conception-3d.jpg',
  },
  {
    title: 'Permis de construire',
    description: 'Montage complet de vos dossiers administratifs : permis de construire, déclarations préalables, conformité réglementaire.',
    icon: FileCheck,
    image: '/conception-permis.jpg',
  },
  {
    title: 'Études techniques',
    description: 'Études de structure, thermique, acoustique et fluides pour des projets techniquement irréprochables.',
    icon: Calculator,
    image: '/methodo-conception.jpg',
  },
  {
    title: 'Conseil et accompagnement',
    description: 'Un bureau d\'études à votre écoute à chaque étape, de la faisabilité à la livraison finale du projet.',
    icon: MessageCircle,
    image: '/methodo-ecoute.jpg',
  },
]

export default function AmmoConceptionContent() {
  return (
    <div className="min-h-screen">
      {/* ══════════════════════════════════════════════
          HERO SECTION — dark anthracite, white text
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-x-hidden pt-24 sm:pt-28 lg:pt-36 bg-[#605E5B]">
        <div className="absolute inset-0">
          <Image
            src="/hero-ammo-conception.jpg"
            alt="AMMO CONCEPTION - Plans, 3D et permis de construire"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#605E5B] via-[#605E5B]/70 to-[#605E5B]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#605E5B]/80 via-transparent to-transparent" />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px)`,
        }} />

        {/* Decorative vertical line */}
        <motion.div
          className="absolute top-32 sm:top-40 left-6 sm:left-12 lg:left-20 w-[2px] bg-gradient-to-b from-[#D6B363] to-transparent"
          initial={{ height: 0 }}
          animate={{ height: '40%' }}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOut }}
        />

        <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/logo-ammo-blanc.svg"
                alt="AMMO"
                width={160}
                height={50}
                className="h-10 sm:h-12 w-auto mb-8 opacity-90"
              />
            </motion.div>

            <motion.span
              className="inline-block px-5 py-2 border border-[#D6B363]/60 text-[#D6B363] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bureau d'Études Intégré
            </motion.span>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
            >
              AMMO
              <br />
              <span className="bg-gradient-to-r from-[#D6B363] via-white to-[#D6B363] bg-clip-text text-transparent">
                CONCEPTION
              </span>
            </motion.h1>

            <motion.p
              className="font-subheading text-lg sm:text-xl lg:text-3xl text-white/80 tracking-wide uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Plans, modélisation 3D et études techniques
            </motion.p>

            <motion.p
              className="font-body text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              AMMO CONCEPTION est le bureau d'études intégré d'AMMO. Nous concevons vos plans architecturaux, réalisons la modélisation 3D de vos projets, montons vos dossiers de permis de construire et assurons les études techniques nécessaires.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES — dark section
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F2ECE7]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div className="text-center mb-16 sm:mb-20" {...fadeInUp}>
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#605E5B]/10 to-[#BD9C69]/10 border border-[#605E5B]/20 text-[#605E5B] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] rounded-full mb-6">
              Nos compétences
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight mb-6">
              De l'idée au
              <span className="bg-gradient-to-r from-[#605E5B] to-[#BD9C69] bg-clip-text text-transparent"> projet</span>
            </h2>
            <p className="font-body text-lg text-[#605E5B] max-w-2xl mx-auto">
              Une expertise complète en conception, de l'esquisse initiale aux études techniques détaillées.
            </p>
          </motion.div>

          {/* Row 1: 3 cards with images */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#605E5B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#605E5B] to-[#3d3c3a] flex items-center justify-center shadow-lg border border-[#D6B363]/30">
                        <Icon className="w-6 h-6 text-[#D6B363]" />
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
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#605E5B] to-[#D6B363] group-hover:w-full transition-all duration-500" />
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#605E5B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#605E5B] to-[#3d3c3a] flex items-center justify-center shadow-lg border border-[#D6B363]/30">
                        <Icon className="w-6 h-6 text-[#D6B363]" />
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
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#605E5B] to-[#D6B363] group-hover:w-full transition-all duration-500" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROCESS — dark anthracite section
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#605E5B] relative overflow-x-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px)`,
        }} />

        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <motion.div className="text-center mb-16 sm:mb-20" {...fadeInUp}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Notre
              <span className="bg-gradient-to-r from-[#D6B363] to-white bg-clip-text text-transparent"> méthode</span>
            </h2>
            <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
              Un processus structuré qui garantit la qualité et la conformité de vos projets à chaque étape.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            {...staggerContainer}
          >
            {[
              { step: '01', title: 'Écoute', description: 'Analyse approfondie de vos besoins, contraintes et aspirations pour votre projet.' },
              { step: '02', title: 'Conception', description: 'Réalisation des plans, esquisses et modélisation 3D pour visualiser votre futur espace.' },
              { step: '03', title: 'Validation', description: 'Présentation des rendus, ajustements et montage des dossiers administratifs.' },
              { step: '04', title: 'Exécution', description: 'Suivi technique et coordination jusqu\'à la réalisation finale de votre projet.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                className="group relative"
                {...staggerItem}
              >
                <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[#D6B363]/30 transition-all duration-500">
                  <span className="font-heading text-5xl text-[#D6B363]/30 group-hover:text-[#D6B363]/60 transition-colors duration-500">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-2xl text-white mt-4 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA SECTION — light section
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#F2ECE7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D6B363]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#605E5B]/8 to-transparent rounded-full blur-3xl" />

        <motion.div
          className="container mx-auto px-6 sm:px-12 lg:px-20 text-center max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
            Donnez vie à vos
            <span className="bg-gradient-to-r from-[#605E5B] to-[#BD9C69] bg-clip-text text-transparent"> idées</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#605E5B] max-w-2xl mx-auto mb-10">
            Plans, modélisation 3D, permis de construire — notre bureau d'études vous accompagne de la conception à la réalisation.
          </p>
          <Link
            href="/#contact"
            className="inline-block relative px-10 sm:px-14 py-4 sm:py-5 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#605E5B] via-[#BD9C69] to-[#605E5B]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#BD9C69] via-[#D6B363] to-[#BD9C69] opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
            </span>
            <span className="relative font-subheading text-white font-semibold text-base sm:text-lg tracking-[0.25em] uppercase">
              Prendre Contact
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
