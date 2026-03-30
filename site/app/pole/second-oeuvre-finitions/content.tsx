'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TreePine, Home, ShieldCheck, PanelTop, Warehouse } from 'lucide-react'

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
    title: 'Terrasses bois et composite',
    description: 'Création de terrasses durables en bois exotique ou composite, adaptées au climat tropical de La Réunion.',
    icon: TreePine,
    image: '/execution-terrasse.jpg',
  },
  {
    title: 'Pergolas et carports',
    description: 'Structures élégantes pour protéger et embellir vos espaces extérieurs, conçues pour résister aux conditions locales.',
    icon: Home,
    image: '/execution-pergola.jpg',
  },
  {
    title: 'Traitement et protection du bois',
    description: 'Solutions professionnelles de traitement préventif et curatif pour prolonger la durée de vie de vos ouvrages bois.',
    icon: ShieldCheck,
    image: '/execution-carport.jpg',
  },
  {
    title: 'Bardage extérieur',
    description: 'Habillage de façade en bois naturel ou composite pour une esthétique contemporaine et une isolation renforcée.',
    icon: PanelTop,
    image: '/execution-bardage.jpg',
  },
  {
    title: 'Abris et aménagements sur mesure',
    description: 'Kiosques, abris de jardin, rangements extérieurs — chaque ouvrage est conçu et fabriqué sur mesure.',
    icon: Warehouse,
  },
]

export default function SecondOeuvreFinitionsContent() {
  return (
    <div className="min-h-screen bg-[#F2ECE7]">
      {/* ══════════════════════════════════════════════
          HERO SECTION — warm earth tones, organic feel
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-24 sm:pt-28 lg:pt-36">
        <div className="absolute inset-0">
          <Image
            src="/hero-ammo-execution.jpg"
            alt="Second Œuvre & Finitions - Bois et aménagements extérieurs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

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
                src="/logo-ammo-or.svg"
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
              Pôle Bois & Extérieurs
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
                EXECUTION
              </span>
            </motion.h1>

            <motion.p
              className="font-subheading text-lg sm:text-xl lg:text-3xl text-white/80 tracking-wide uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Bois, extérieurs et aménagements sur mesure
            </motion.p>

            <motion.p
              className="font-body text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Second Œuvre & Finitions est le pôle dédié aux réalisations extérieures et au travail du bois. Terrasses, pergolas, carports, traitement du bois, bardage et abris — chaque projet est exécuté avec un savoir-faire artisanal et une attention au détail.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES — alternating image/text rows
          ══════════════════════════════════════════════ */}
      <section id="services" className="py-20 sm:py-28 lg:py-36 bg-[#F2ECE7] overflow-x-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div className="text-center mb-16 sm:mb-20" {...fadeInUp}>
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#BD9C69]/10 to-[#D6B363]/10 border border-[#BD9C69]/30 text-[#BD9C69] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] rounded-full mb-6">
              Nos réalisations
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight mb-6">
              L'art du
              <span className="bg-gradient-to-r from-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent"> bois</span>
            </h2>
            <p className="font-body text-lg text-[#605E5B] max-w-2xl mx-auto">
              Un savoir-faire artisanal au service de vos espaces extérieurs, avec des matériaux nobles et durables.
            </p>
          </motion.div>

          {/* Services with images — top row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8"
            {...staggerContainer}
          >
            {services.slice(0, 4).map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  {...staggerItem}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#BD9C69] to-[#D6B363] flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg sm:text-xl text-foreground mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-[#605E5B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#BD9C69] to-[#D6B363] group-hover:w-full transition-all duration-500" />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Last service — full width card */}
          {(() => {
            const lastService = services[4]
            const Icon = lastService.icon
            return (
              <motion.div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 p-8 sm:p-10 flex gap-6 items-start max-w-2xl mx-auto"
                {...fadeInUp}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#BD9C69]/10 to-[#D6B363]/10 border border-[#BD9C69]/20 flex items-center justify-center group-hover:from-[#BD9C69] group-hover:to-[#D6B363] transition-all duration-500">
                  <Icon className="w-7 h-7 text-[#BD9C69] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-3 tracking-tight">
                    {lastService.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#605E5B] leading-relaxed">
                    {lastService.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#BD9C69] to-[#D6B363] group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STEVE LESGARDEUR — team member highlight
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div
                className="lg:w-2/5 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#BD9C69]/20 to-[#D6B363]/20 rounded-2xl blur-xl group-hover:from-[#BD9C69]/30 group-hover:to-[#D6B363]/30 transition-all duration-500" />
                  {/* Placeholder avatar with initials */}
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-gradient-to-br from-[#605E5B] to-[#3d3c3a] shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMCBMMzAgNjAiIHN0cm9rZT0icmdiYSgyMTQsMTc5LDk5LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPHBhdGggZD0iTTAgMzAgTDYwIDMwIiBzdHJva2U9InJnYmEoMjE0LDE3OSw5OSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30" />
                    <span className="font-heading text-7xl sm:text-8xl text-[#D6B363]/70 select-none">
                      SL
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#3d3c3a] to-transparent" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-3/5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              >
                <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#BD9C69]/10 to-[#D6B363]/10 border border-[#BD9C69]/30 text-[#BD9C69] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] rounded-full mb-6">
                  Chef de Chantier
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl text-foreground tracking-tight mb-3">
                  Steve Lesgardeur
                </h2>
                <p className="font-subheading text-xl sm:text-2xl text-[#BD9C69] tracking-wide uppercase mb-8">
                  Chef de chantier — Second Œuvre & Finitions
                </p>

                <div className="space-y-4 font-body text-[#605E5B] text-base sm:text-lg leading-relaxed">
                  <p>
                    Diplômé ébéniste-menuisier, Steve apporte à Second Œuvre & Finitions un savoir-faire artisanal et une expertise terrain inégalée. En tant que chef de chantier, il assure la coordination des travaux, le suivi qualité et la relation client au quotidien.
                  </p>
                  <p>
                    Sa maîtrise du bois et des aménagements extérieurs garantit des réalisations alliant précision technique et finition haut de gamme.
                  </p>
                </div>

                <div className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
                  <h3 className="font-heading text-xl text-foreground mb-4">Ses atouts</h3>
                  <ul className="space-y-2 font-body text-[#605E5B]">
                    {[
                      'Formation ébéniste-menuisier certifiée',
                      'Expertise terrain et coordination de chantier',
                      'Maîtrise des bois exotiques et composites',
                      'Suivi qualité et relation client privilégiée',
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-[#D6B363] mr-3 mt-1 text-lg">&#9670;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
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
            Sublimez vos
            <span className="bg-gradient-to-r from-[#BD9C69] to-[#D6B363] bg-clip-text text-transparent"> extérieurs</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#605E5B] max-w-2xl mx-auto mb-10">
            Terrasse, pergola, carport ou aménagement sur mesure — confiez votre projet à notre équipe spécialisée bois et extérieurs.
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
