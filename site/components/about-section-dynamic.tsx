"use client";

import { useEffect, useState, useRef } from 'react';

export function AboutSectionDynamic() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check visibility for animations
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('[data-animate]');
        elements.forEach((el: Element) => {
          const htmlEl = el as HTMLElement;
          const rect = htmlEl.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInView) {
            const animateKey = htmlEl.dataset.animate;
            if (animateKey) {
              setIsVisible(prev => ({...prev, [animateKey]: true}));
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 opacity-40 blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-100 to-yellow-100 opacity-40 blur-3xl"
          style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="w-full">

          {/* Animated Section Title */}
          <div
            data-animate="title"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible['title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-6 uppercase tracking-wider">
              Notre ADN
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              AMMO Construction
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 mt-2">
                L'excellence dans tous les corps de métier
              </span>
            </h2>
          </div>

          {/* Main Content - Staggered Animation Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {[
              {
                icon: "🏗️",
                title: "Construction",
                text: "Maisons individuelles, villas de luxe et bâtiments commerciaux. Notre expertise couvre tous vos projets de construction."
              },
              {
                icon: "🔧",
                title: "Rénovation",
                text: "Transformation complète de vos espaces. Modernisation, mise aux normes et rénovation énergétique adaptées à La Réunion."
              },
              {
                icon: "📐",
                title: "Extension",
                text: "Agrandissez harmonieusement votre habitat. Extensions, surélévations et aménagements qui valorisent votre patrimoine."
              }
            ].map((item, index) => (
              <div
                key={index}
                data-animate={`card-${index}`}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  isVisible[`card-${index}`]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: `translateY(${-parallaxOffset * 0.1}px)`
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Feature Section with Parallax */}
          <div
            className="relative bg-gradient-to-br from-amber-50 via-white to-yellow-50 rounded-3xl p-12 lg:p-16 shadow-xl mb-20"
            style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
          >
            {/* Animated badge */}
            <div
              data-animate="badge"
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                isVisible.badge ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-full shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Notre Différence
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div
                data-animate="left-content"
                className={`transition-all duration-1000 ${
                  isVisible['left-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  L'Entretien Patrimonial
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Contrairement à nos concurrents qui disparaissent après la livraison, AMMO Construction reste votre partenaire à vie.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Suivi régulier post-construction', 'Maintenance préventive adaptée', 'Protection contre le climat tropical', 'Valorisation de votre patrimoine'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-animate="right-content"
                className={`transition-all duration-1000 ${
                  isVisible['right-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-amber-500 mb-2">100%</div>
                  <div className="text-gray-600 font-medium mb-6">Expertise Multi-Métiers</div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Projets réalisés</span>
                      <span className="font-bold text-2xl text-gray-900">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Clients satisfaits</span>
                      <span className="font-bold text-2xl text-gray-900">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Contrats d'entretien</span>
                      <span className="font-bold text-2xl text-gray-900">250+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section with Hover Effects */}
          <div
            data-animate="cta"
            className={`text-center transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Prêt à concrétiser votre projet ?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="group relative inline-block px-10 py-4 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:from-yellow-500 group-hover:to-amber-500 transition-all duration-500"></span>
                <span className="relative text-white font-bold tracking-wider text-lg flex items-center">
                  DEVIS GRATUIT
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="group inline-block px-10 py-4 rounded-full border-2 border-amber-500 text-amber-600 font-bold tracking-wider text-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                DÉCOUVRIR NOS SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}