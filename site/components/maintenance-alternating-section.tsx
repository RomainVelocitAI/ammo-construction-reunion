"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const maintenanceData = [
  {
    title: "Protection Préventive",
    description: "Anticipez les problèmes avant qu'ils ne deviennent critiques. Notre service d'inspection régulière détecte les signes avant-coureurs.",
    highlight: "70% d'économies",
    badge: "Données clients vérifiées",
    src: "/protection-preventive.jpg",
    isLeftImage: true
  },
  {
    title: "Longévité Maximale",
    description: "Prolongez la durée de vie de votre investissement immobilier avec un entretien régulier et professionnel.",
    highlight: "Expertise maintenance préventive",
    badge: "10+ années d'expérience",
    src: "/longevite-maximale.jpg",
    isLeftImage: false
  },
  {
    title: "Rentabilité Optimisée",
    description: "Transformez les dépenses imprévues en investissement planifié pour réduire drastiquement les coûts.",
    highlight: "ROI garanti",
    badge: "Analyse financière incluse",
    src: "/rentabilite-optimisee.jpg",
    isLeftImage: true
  },
  {
    title: "Valeur Préservée",
    description: "Maintenez et augmentez la valeur de votre patrimoine grâce à un suivi professionnel continu.",
    highlight: "+25% de valeur",
    badge: "Étude de marché 2024",
    src: "/valeur-preservee.jpg",
    isLeftImage: false
  },
  {
    title: "Tranquillité d'Esprit",
    description: "Confiez l'entretien à des professionnels avec rapports réguliers et interventions planifiées.",
    highlight: "Suivi 24/7",
    badge: "Service premium garanti",
    src: "/tranquillite-esprit.jpg",
    isLeftImage: true
  }
]

const MaintenanceCard = ({
  i,
  title,
  description,
  highlight,
  badge,
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
  badge: string
  src: string
  isLeftImage: boolean
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getImageHeight = () => {
    if (isMobile) return 'h-[250px]'
    if (isTablet) return 'h-[350px]'
    return 'h-[500px]'
  }

  const getTextSize = () => {
    if (isMobile) return 'text-2xl'
    if (isTablet) return 'text-3xl'
    return 'text-4xl'
  }

  return (
    <div ref={container} className={`sticky top-20 flex items-center justify-center ${isMobile ? 'px-2' : isTablet ? 'px-4' : 'px-8'} w-full`}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-1/4 w-full max-w-7xl mx-auto origin-top bg-background rounded-3xl shadow-xl"
      >
        <div className={`grid ${isMobile || isTablet ? 'grid-cols-1' : 'grid-cols-2'} ${isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-16'} items-center ${isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8'} ${
          !isMobile && !isTablet && !isLeftImage ? '[direction:rtl]' : ''
        }`}>
          {/* Image Column */}
          <div className={`relative ${getImageHeight()} rounded-2xl overflow-hidden shadow-2xl`}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent z-10" />
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className={`space-y-4 ${!isMobile && !isTablet && !isLeftImage ? '[direction:ltr]' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-secondary uppercase tracking-wider`}>
                Avantage #{i + 1}
              </span>
            </div>

            <h3 className={`${getTextSize()} font-subheading font-bold text-foreground`}>
              {title}
            </h3>

            <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground leading-relaxed`}>
              {description}
            </p>

            <div className={`bg-muted/20 rounded-xl ${isMobile ? 'p-4' : 'p-6'} shadow-lg border-l-4 border-secondary`}>
              <div className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-secondary`}>
                {highlight}
              </div>
              <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground mt-1`}>
                {badge}
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

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getHeaderSize = () => {
    if (isMobile) return 'text-3xl'
    if (isTablet) return 'text-4xl'
    return 'text-5xl'
  }

  return (
    <section className="bg-background">
        {/* Header */}
        <div className={`text-center ${isMobile ? 'py-12 px-4' : isTablet ? 'py-16 px-6' : 'py-20 px-4'}`}>
          <h2 className={`${getHeaderSize()} font-subheading font-bold text-foreground mb-6`}>
            Service d'Entretien Préventif
            <span className="block text-secondary mt-2">Votre Avantage Décisif</span>
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto`}>
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
        <div className={`pt-0 ${isMobile ? 'pb-4 px-2' : isTablet ? 'pb-6 px-4' : 'pb-8 px-4'}`}>
          <div className={`bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl ${isMobile ? 'p-6' : isTablet ? 'p-8' : 'p-12'} max-w-4xl mx-auto text-center`}>
            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-foreground mb-4`}>
              Protégez Votre Investissement
            </h3>
            <p className={`text-muted-foreground ${isMobile ? 'mb-6 text-sm' : 'mb-8'} max-w-2xl mx-auto`}>
              Demandez votre diagnostic gratuit et découvrez notre programme d'entretien personnalisé.
            </p>
            <div className={`flex ${isMobile || isTablet ? 'flex-col' : 'flex-row'} gap-4 justify-center`}>
              <button className={`bg-gradient-to-r from-secondary to-accent text-primary-foreground ${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'} rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                Diagnostic Gratuit
              </button>
              <button className={`bg-background text-foreground ${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'} rounded-xl font-semibold border-2 border-border hover:border-secondary transition-colors duration-300`}>
                Voir nos Contrats
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MaintenanceAlternatingSection
