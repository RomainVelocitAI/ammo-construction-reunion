'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, ClipboardCheck, HardHat, Settings } from 'lucide-react'

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
    title: 'Coordination de projet',
    description: 'Pilotage de l\'ensemble des intervenants de votre chantier pour garantir cohérence, qualité et respect du planning.',
    icon: Users,
    image: '/planification-coordination.jpeg',
  },
  {
    title: 'OPC',
    description: 'Ordonnancement, pilotage et coordination : planification des tâches, gestion des interfaces entre corps de métier et optimisation des délais.',
    icon: ClipboardCheck,
    image: '/methodo-realisation.jpg',
  },
  {
    title: 'Suivi de chantier',
    description: 'Présence terrain régulière, contrôle qualité des ouvrages, comptes-rendus détaillés et points d\'avancement.',
    icon: HardHat,
    image: '/methodo-livraison.jpg',
  },
  {
    title: 'Pilotage technique',
    description: 'Supervision technique globale : conformité aux plans, respect des DTU et des normes en vigueur à La Réunion.',
    icon: Settings,
    image: '/methodo-conception.jpg',
  },
]

export default function MaitriseOeuvreContent() {
  return (
    <div className="min-h-screen">
      {/* ══════════════════════════════════════════════
          HERO SECTION — crème background, camel/gold logo
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-x-hidden pt-24 sm:pt-28 lg:pt-36 bg-[#F2ECE7]">
        <div className="absolute inset-0">
          <Image
            src="/construction-metal.jpg"
            alt="Maîtrise d'Œuvre - Pilotage et coordination de chantier"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F2ECE7] via-[#F2ECE7]/60 to-[#F2ECE7]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2ECE7]/60 via-transparent to-transparent" />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #605E5B 0px, #605E5B 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #605E5B 0px, #605E5B 1px, transparent 1px, transparent 60px)`,
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
              className="mb-6 sm:mb-8"
            >
              <Image
                src="/logo-horizontal-gold.png"
                alt="Maîtrise d'Œuvre - Groupe AMMO"
                width={200}
                height={64}
                className="h-12 sm:h-16 w-auto"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#605E5B] mb-4 sm:mb-6 tracking-tight"
            >
              Maîtrise d'Œuvre
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
              className="text-lg sm:text-xl text-[#605E5B]/80 max-w-2xl leading-relaxed"
            >
              Pilotage, coordination et suivi de vos projets
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DESCRIPTION SECTION
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[3px] w-16 bg-gradient-to-r from-secondary to-accent rounded-full" />
              <span className="text-secondary text-sm font-semibold uppercase tracking-[0.2em]">Notre expertise</span>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              AMMO assure la maîtrise d'œuvre de vos chantiers : coordination de l'ensemble des intervenants, ordonnancement-pilotage-coordination (OPC), suivi technique et contrôle qualité. Votre projet est piloté de A à Z dans le respect des délais, du budget et des normes en vigueur à La Réunion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES GRID
          ══════════════════════════════════════════════ */}
      <section id="services" className="py-16 sm:py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un chef d'orchestre pour tous vos intervenants
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                {...staggerItem}
                className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Un projet à piloter ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Confiez la maîtrise d'œuvre de votre chantier à AMMO. Coordination, suivi et qualité garantis.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-secondary via-accent to-secondary text-primary-foreground font-medium text-lg tracking-[0.2em] uppercase hover:from-accent hover:to-secondary transition-all duration-500 relative overflow-hidden group"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              <span className="relative">Prendre Contact</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
