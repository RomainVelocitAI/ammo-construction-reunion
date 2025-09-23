"use client";

import { useEffect, useState, useRef } from 'react';

export function AboutSectionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: '/construction.jpg',
      title: 'Construction Neuve',
      description: 'Maisons individuelles et bâtiments commerciaux'
    },
    {
      id: 2,
      image: '/renovation.jpg',
      title: 'Rénovation Complète',
      description: 'Modernisation et mise aux normes'
    },
    {
      id: 3,
      image: '/extension.jpg',
      title: 'Extensions',
      description: 'Agrandissement et surélévation'
    },
    {
      id: 4,
      image: '/exterieur.jpg',
      title: 'Aménagements Extérieurs',
      description: 'Terrasses, piscines et jardins'
    },
    {
      id: 5,
      image: '/entretien.jpg',
      title: 'Entretien Patrimonial',
      description: 'Maintenance préventive et curative'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* Left Side - Carousel (60%) */}
          <div className={`lg:col-span-3 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with slide info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className={`absolute bottom-0 left-0 p-8 transition-all duration-700 delay-200 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <h3 className="text-3xl font-bold text-white mb-2">{slide.title}</h3>
                    <p className="text-lg text-white/90">{slide.description}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-all duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-all duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                    } rounded-full`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-black/20">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? 'ring-2 ring-amber-500 ring-offset-2 opacity-100'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Content (40%) */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Badge */}
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-6 uppercase tracking-wider">
              Excellence & Innovation
            </span>

            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              AMMO Construction
              <span className="block text-xl lg:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600 mt-2">
                Votre vision, notre expertise
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Depuis plus de 15 ans, AMMO Construction façonne le paysage immobilier de La Réunion avec passion et expertise.
            </p>

            {/* Services List */}
            <div className="space-y-4 mb-8">
              {['Construction sur mesure', 'Rénovation intégrale', 'Extensions harmonieuses', 'Aménagements extérieurs', 'Entretien patrimonial'].map((service, index) => (
                <div key={index} className={`flex items-center gap-3 transition-all duration-500 delay-${300 + index * 100}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-amber-500">500+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-amber-500">98%</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-amber-500">15+</div>
                <div className="text-sm text-gray-600">Années d'expertise</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-amber-500">250+</div>
                <div className="text-sm text-gray-600">Contrats d'entretien</div>
              </div>
            </div>

            {/* Special Feature */}
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-white p-6 rounded-2xl border border-amber-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                L'Entretien Patrimonial
              </h3>
              <p className="text-gray-700">
                Un service unique qui nous distingue : nous restons à vos côtés après la livraison pour préserver et valoriser votre investissement.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative inline-block w-full px-8 py-4 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500"></span>
              <span className="relative text-white font-bold tracking-wider flex items-center justify-center">
                DÉCOUVRIR NOS RÉALISATIONS
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}