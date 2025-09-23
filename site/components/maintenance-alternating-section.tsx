"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const maintenanceData = [
  {
    title: "Protection Préventive",
    description: "Anticipez les problèmes avant qu'ils ne deviennent critiques. Notre service d'inspection régulière détecte les signes avant-coureurs.",
    highlight: "70% d'économies",
    src: "/exterieur.jpg",
    isLeftImage: true
  },
  {
    title: "Longévité Maximale",
    description: "Prolongez la durée de vie de votre investissement immobilier avec un entretien régulier et professionnel.",
    highlight: "+15 ans de durabilité",
    src: "/construction.jpg",
    isLeftImage: false
  },
  {
    title: "Rentabilité Optimisée",
    description: "Transformez les dépenses imprévues en investissement planifié pour réduire drastiquement les coûts.",
    highlight: "ROI garanti",
    src: "/villamoderne.png",
    isLeftImage: true
  },
  {
    title: "Valeur Préservée",
    description: "Maintenez et augmentez la valeur de votre patrimoine grâce à un suivi professionnel continu.",
    highlight: "+25% de valeur",
    src: "/villa.png",
    isLeftImage: false
  },
  {
    title: "Tranquillité d'Esprit",
    description: "Confiez l'entretien à des professionnels avec rapports réguliers et interventions planifiées.",
    highlight: "Suivi 24/7",
    src: "/lodgedeluxe.png",
    isLeftImage: true
  }
]

const MaintenanceCard = ({
  i,
  title,
  description,
  highlight,
  src,
  isLeftImage,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  description: string
  highlight: string
  src: string
  isLeftImage: boolean
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-1/4 w-full max-w-7xl mx-auto origin-top bg-white rounded-3xl shadow-xl"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 ${
          isLeftImage ? '' : 'lg:[direction:rtl]'
        }`}>
          {/* Image Column */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent z-10" />
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className={`space-y-6 ${isLeftImage ? '' : 'lg:[direction:ltr]'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                Avantage #{i + 1}
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {title}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
              <div className="text-2xl font-bold text-amber-600">
                {highlight}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Résultat prouvé
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const MaintenanceAlternatingSection = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <section className="bg-white">
        {/* Header */}
        <div className="text-center py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service d'Entretien Préventif
            <span className="block text-amber-600 mt-2">Votre Avantage Décisif</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximisez la longévité et la rentabilité de votre bien immobilier
            en évitant les réparations tardives et coûteuses.
          </p>
        </div>

        {/* Scrolling Cards */}
        <main
          ref={container}
          className="relative flex w-full flex-col items-center justify-center pb-[10vh] pt-[5vh]"
        >
          {maintenanceData.map((item, i) => {
            const targetScale = Math.max(0.8, 1 - (maintenanceData.length - i - 1) * 0.05)
            return (
              <MaintenanceCard
                key={`maintenance_${i}`}
                i={i}
                {...item}
                progress={scrollYProgress}
                range={[i * 0.15, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </main>

        {/* CTA Section */}
        <div className="pt-0 pb-8 px-4">
          <div className="bg-gradient-to-r from-amber-500/10 to-[#FFD54F]/10 rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Protégez Votre Investissement
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Demandez votre diagnostic gratuit et découvrez notre programme d'entretien personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Diagnostic Gratuit
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-amber-500 transition-colors duration-300">
                Voir nos Contrats
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MaintenanceAlternatingSection