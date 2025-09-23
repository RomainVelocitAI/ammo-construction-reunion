"use client";

import { useEffect, useState, useRef } from 'react';

export function AboutSectionSplit() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [stats, setStats] = useState({ years: 0, projects: 0, satisfaction: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check visibility
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      }
    };

    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          years: Math.floor(15 * progress),
          projects: 0,
          satisfaction: 0
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Split Layout Container */}
      <div className="w-full h-full flex flex-col lg:flex-row">

        {/* Left Side - Image with Parallax */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-screen bg-white">
          <div className="absolute inset-0 overflow-hidden bg-white">
            <div
              className="absolute inset-0 scale-110"
              style={{ transform: `translateY(${-parallaxOffset * 0.3}px) scale(1.1)` }}
            >
              <img
                src="/construction.jpg"
                alt="AMMO Construction site"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay with gradient - removed to fix gray background issue */}
          </div>

          {/* Floating Stats Cards - Outside of overflow container */}
          <div className={`absolute bottom-10 left-6 lg:left-10 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
              <div className="text-4xl lg:text-5xl font-bold text-amber-500">{stats.years}+</div>
              <div className="text-gray-700 font-medium">Années d'excellence</div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className={`max-w-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Badge */}
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-8 uppercase tracking-wider">
              Depuis 2009
            </span>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AMMO Construction
              <span className="block text-2xl lg:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600 mt-2">
                L'excellence à La Réunion
              </span>
            </h2>

            {/* Main Text */}
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Leader reconnu du BTP à La Réunion, nous transformons vos projets immobiliers en réalité depuis plus de 15 ans.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              De la construction neuve à la rénovation complète, nos équipes d'experts maîtrisent chaque aspect de votre projet avec un savoir-faire reconnu et une attention méticuleuse aux détails.
            </p>


            {/* Unique Value Proposition */}
            <div className={`bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-200 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Notre Différence
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                L'Entretien Patrimonial : Contrairement à nos concurrents, nous restons à vos côtés après la livraison.
                Un service unique de maintenance préventive qui protège et valorise votre investissement année après année.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                className="group relative inline-block px-8 py-4 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500"></span>
                <span className="relative text-white font-bold tracking-wider flex items-center justify-center">
                  DEVIS GRATUIT
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-4 rounded-full border-2 border-amber-500 text-amber-600 font-bold tracking-wider hover:bg-amber-500 hover:text-white transition-all duration-300 text-center"
              >
                NOS SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />
    </section>
  );
}