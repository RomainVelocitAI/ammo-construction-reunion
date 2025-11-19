'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface RelatedService {
  title: string
  description: string
  linkText: string
  href: string
  image: string
  imageAlt: string
}

interface RelatedServicesProps {
  services: RelatedService[]
  sectionTitle?: string
  carousel?: boolean
}

export function RelatedServices({
  services,
  sectionTitle = "Découvrez Aussi Nos Services Complémentaires",
  carousel = false
}: RelatedServicesProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = 400 + 32
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    })
    setCurrentIndex(index)
  }

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1
    scrollToIndex(newIndex)
    setIsPaused(true)
  }

  const handleNext = () => {
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1
    scrollToIndex(newIndex)
    setIsPaused(true)
  }

  useEffect(() => {
    if (!carousel || !scrollRef.current || isPaused) return

    const scrollContainer = scrollRef.current
    let animationId: number
    let scrollPosition = scrollContainer.scrollLeft

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft = scrollPosition
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [carousel, isPaused])

  if (carousel && services.length > 3) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              {sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              AMMO vous accompagne sur l'ensemble de vos projets de construction et rénovation
            </p>

            <div className="relative">
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/90 hover:bg-background p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
                aria-label="Service précédent"
              >
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/90 hover:bg-background p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
                aria-label="Service suivant"
              >
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div
                ref={scrollRef}
                className="overflow-x-hidden scroll-smooth"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex gap-8 pb-4">
                  {[...services, ...services].map((service, index) => (
                    <div
                      key={index}
                      className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-[400px]"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          {service.description}
                        </p>

                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-accent transition-colors group/link"
                        >
                          <span>{service.linkText}</span>
                          <svg
                            className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">Utilisez les flèches pour naviguer ou survolez pour mettre en pause</p>

              <div className="flex justify-center gap-2 mb-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-secondary w-8'
                        : 'bg-muted hover:bg-muted-foreground'
                    }`}
                    aria-label={`Aller au service ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/#services"
                className="inline-block bg-gradient-to-r from-secondary to-accent text-primary-foreground font-bold py-4 px-8 rounded-lg hover:from-accent hover:to-secondary transition-all shadow-lg hover:shadow-xl"
              >
                Voir Tous Nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            AMMO vous accompagne sur l'ensemble de vos projets de construction et rénovation
          </p>

          <div className={`grid ${services.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8`}>
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-accent transition-colors group/link"
                  >
                    <span>{service.linkText}</span>
                    <svg
                      className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/#services"
              className="inline-block bg-gradient-to-r from-secondary to-accent text-primary-foreground font-bold py-4 px-8 rounded-lg hover:from-accent hover:to-secondary transition-all shadow-lg hover:shadow-xl"
            >
              Voir Tous Nos Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
