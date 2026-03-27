'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HubSpotForm } from '@/components/hubspot-form'
import {
  CalendarCheck,
  CreditCard,
  Award,
  Handshake,
  FileCheck,
  ArrowRight,
  Phone,
  Paintbrush,
  Hammer,
  BrickWall,
  Zap,
  Droplets,
  Grid3X3,
  TreePine,
  Waves,
  Compass,
  Building2,
  MapPin,
  Users,
  Clock,
} from 'lucide-react'

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

/* ─── Data ─── */
const stats = [
  { icon: Clock, value: '15 ans', label: "d'expérience" },
  { icon: Users, value: '50+', label: 'partenaires' },
  { icon: MapPin, value: 'Toute l\'île', label: 'de La Réunion' },
]

const poles = [
  {
    name: 'AMMO BTP',
    logo: '/logo-ammo-noir.svg',
    description:
      'Rénovation, gros œuvre et second œuvre. Un interlocuteur unique pour coordonner l\'ensemble de vos travaux.',
    href: '/pole/ammo-btp',
    accent: 'from-[#BD9C69] to-[#D6B363]',
  },
  {
    name: 'AMMO EXECUTION',
    logo: '/logo-ammo-or.svg',
    description:
      'Terrasses, pergolas, carports, bardage et aménagements bois sur mesure. Savoir-faire artisanal à La Réunion.',
    href: '/pole/ammo-execution',
    accent: 'from-[#D6B363] to-[#BD9C69]',
  },
  {
    name: 'AMMO CONCEPTION',
    logo: '/logo-ammo-noir.svg',
    description:
      'Plans architecturaux, modélisation 3D, permis de construire et études techniques. Bureau d\'études intégré.',
    href: '/pole/ammo-conception',
    accent: 'from-[#BD9C69] to-[#D6B363]',
  },
]

const advantages = [
  {
    icon: CalendarCheck,
    title: 'Flux de chantiers régulier',
    description: 'Un volume de projets constant tout au long de l\'année, pour une activité stable et prévisible.',
  },
  {
    icon: CreditCard,
    title: 'Paiements ponctuels et transparents',
    description: 'Des règlements dans les délais convenus, sans surprise. Transparence totale sur la facturation.',
  },
  {
    icon: Award,
    title: 'Image professionnelle et référencement',
    description: 'Bénéficiez de la notoriété AMMO et d\'une visibilité accrue auprès de notre réseau de clients.',
  },
  {
    icon: Handshake,
    title: 'Relation de confiance long terme',
    description: 'Nous construisons des partenariats durables, basés sur le respect mutuel et la fidélité.',
  },
  {
    icon: FileCheck,
    title: 'Accompagnement administratif',
    description: 'Aide à la conformité, suivi des assurances et simplification des démarches administratives.',
  },
]

const trades = [
  { icon: Paintbrush, name: 'Peinture' },
  { icon: Hammer, name: 'Menuiserie bois' },
  { icon: Building2, name: 'Gros oeuvre' },
  { icon: BrickWall, name: 'Maçonnerie' },
  { icon: Zap, name: 'Électricité' },
  { icon: Droplets, name: 'Plomberie' },
  { icon: Grid3X3, name: 'Carrelage' },
  { icon: TreePine, name: 'Espaces verts' },
  { icon: Waves, name: 'Piscines' },
  { icon: Compass, name: 'Architecture / conception' },
]

/* ─── Component ─── */
export function EspaceProContent() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-36 xl:pt-44">
      {/* ════════════════════════════════════════════════
          SECTION 1 — Hero / Présentation AMMO
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/espace-pro-hero.jpg"
            alt="Chantier AMMO à La Réunion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 py-24 sm:py-32 lg:py-40">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm border border-[#D6B363]/40 rounded-full text-[#D6B363] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-8">
              Espace Partenaires
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-wide leading-[0.95] mb-6"
          >
            Rejoignez le{' '}
            <span className="bg-gradient-to-r from-[#BD9C69] via-[#D6B363] to-[#BD9C69] bg-clip-text text-transparent">
              réseau AMMO
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="font-subheading text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-2xl mb-16 leading-relaxed"
          >
            Sous-traitants et artisans qualifiés : intégrez un réseau d'excellence pour bâtir ensemble l'avenir de La Réunion.
          </motion.p>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                className="group relative bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.12] hover:border-[#D6B363]/30 transition-all duration-500"
              >
                <stat.icon className="w-6 h-6 text-[#D6B363] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Brief description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            className="mt-16 max-w-3xl"
          >
            <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed border-l-2 border-[#D6B363]/50 pl-6">
              AMMO est un contractant général implanté à La Réunion, spécialisé dans la coordination technique, juridique et administrative de projets de construction et de rénovation. Nous recherchons en permanence des partenaires fiables pour renforcer notre réseau et répondre à la demande croissante sur l'île.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — Nos 3 Pôles
         ════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#BD9C69]/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D6B363]/5 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 border border-[#BD9C69]/30 rounded-full text-[#BD9C69] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Notre Structure
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground uppercase tracking-wide">
              Nos 3 Pôles
            </h2>
            <p className="font-subheading text-lg sm:text-xl lg:text-2xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Trois entités complémentaires pour couvrir l'ensemble de vos besoins en construction et conception.
            </p>
          </motion.div>

          {/* Poles cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {poles.map((pole, i) => (
              <motion.div
                key={pole.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative bg-white/60 backdrop-blur-sm border border-[#BD9C69]/15 rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(189,156,105,0.15)] transition-all duration-700 hover:-translate-y-1"
              >
                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${pole.accent}`} />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Logo */}
                  <div className="relative h-14 sm:h-16 mb-8">
                    <Image
                      src={pole.logo}
                      alt={pole.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-wider mb-4">
                    {pole.name}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                    {pole.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={pole.href}
                    className="inline-flex items-center gap-2 text-[#BD9C69] font-body text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all duration-500"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — Pourquoi collaborer avec AMMO
         ════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#605E5B] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D6B363]/20 to-transparent" />
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-[#D6B363]/5 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Advantages */}
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-block px-5 py-2 bg-[#D6B363]/10 border border-[#D6B363]/30 rounded-full text-[#D6B363] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6">
                  Avantages
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2ECE7] uppercase tracking-wide mb-4">
                  Pourquoi collaborer{' '}
                  <span className="bg-gradient-to-r from-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent">
                    avec AMMO
                  </span>
                </h2>
                <p className="font-subheading text-lg sm:text-xl text-[#F2ECE7]/60 mb-12">
                  Un partenariat structuré autour de la transparence, la régularité et le respect mutuel.
                </p>
              </motion.div>

              <div className="space-y-5">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={adv.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="group flex gap-5 p-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-[#D6B363]/20 transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#BD9C69]/20 to-[#D6B363]/10 flex items-center justify-center group-hover:from-[#BD9C69]/30 group-hover:to-[#D6B363]/20 transition-all duration-500">
                      <adv.icon className="w-5 h-5 text-[#D6B363]" />
                    </div>
                    <div>
                      <h3 className="font-body text-base sm:text-lg font-bold text-[#F2ECE7] mb-1">
                        {adv.title}
                      </h3>
                      <p className="font-body text-sm text-[#F2ECE7]/50 leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#BD9C69]/30 to-[#D6B363]/20 rounded-2xl blur-sm" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/espace-pro-partenariat.jpg"
                    alt="Partenariat AMMO - collaboration sur chantier"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#605E5B]/60 via-transparent to-transparent" />
                </div>
              </div>
              {/* Floating stat */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-gradient-to-br from-[#BD9C69] to-[#D6B363] text-white rounded-2xl p-5 sm:p-6 shadow-2xl"
              >
                <p className="font-heading text-3xl sm:text-4xl font-bold">98%</p>
                <p className="font-body text-xs sm:text-sm text-white/80 mt-1">de partenaires<br />satisfaits</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 — Profils Recherchés
         ════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#BD9C69]/30 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D6B363]/[0.04] rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 border border-[#BD9C69]/30 rounded-full text-[#BD9C69] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Recrutement
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground uppercase tracking-wide">
              Profils Recherchés
            </h2>
            <p className="font-subheading text-lg sm:text-xl lg:text-2xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tous corps de métier. Entreprises assurées et qualifiées.
            </p>
          </motion.div>

          {/* Trades grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {trades.map((trade, i) => (
              <motion.div
                key={trade.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative bg-white/50 backdrop-blur-sm border border-[#BD9C69]/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/80 hover:border-[#BD9C69]/25 hover:shadow-[0_10px_40px_-10px_rgba(189,156,105,0.12)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BD9C69]/10 to-[#D6B363]/5 flex items-center justify-center mx-auto mb-4 group-hover:from-[#BD9C69]/20 group-hover:to-[#D6B363]/15 transition-all duration-500">
                  <trade.icon className="w-5 h-5 text-[#BD9C69] group-hover:text-[#D6B363] transition-colors duration-300" />
                </div>
                <p className="font-body text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {trade.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={10}
            className="text-center mt-12 font-body text-sm sm:text-base text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#BD9C69]/[0.07] border border-[#BD9C69]/15 rounded-full">
              <Award className="w-4 h-4 text-[#BD9C69]" />
              Entreprises assurées et qualifiées uniquement
            </span>
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5 — Formulaire de contact (placeholder)
         ════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#F2ECE7] via-white to-[#F2ECE7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#BD9C69]/30 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#D6B363]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 -left-20 w-60 h-60 bg-[#BD9C69]/5 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 border border-[#BD9C69]/30 rounded-full text-[#BD9C69] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6">
                Rejoignez-nous
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide">
                Candidature Partenaire
              </h2>
            </motion.div>

            {/* HubSpot candidature form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative bg-white/70 backdrop-blur-sm border border-[#BD9C69]/15 rounded-2xl p-8 sm:p-10 lg:p-14 shadow-[0_20px_60px_-20px_rgba(189,156,105,0.1)]"
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#BD9C69] to-[#D6B363] rounded-full" />

              <HubSpotForm formId="94bba552-5944-4029-a29b-f6f96ce25fcc" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
