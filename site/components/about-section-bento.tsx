"use client";

import { useEffect, useState, useRef } from 'react';

export function AboutSectionBento() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('[data-animate]');
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          const rect = htmlEl.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
          if (isInView) {
            const animateKey = htmlEl.dataset.animate;
            if (animateKey) {
              setIsVisible((prev) => ({ ...prev, [animateKey]: true }));
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div
          data-animate="header"
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-6 uppercase tracking-wider">
            Notre Histoire
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            AMMO Construction
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Une équipe d'experts pluridisciplinaires au service de vos projets
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">

          {/* Main Image Card - Spans 2x2 */}
          <div
            data-animate="main-card"
            className={`md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
              isVisible['main-card'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onMouseEnter={() => setHoveredCard('main')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src="/construction.jpg"
              alt="AMMO Construction"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Bâtissons Ensemble
              </h3>
              <p className="text-white/90 text-lg">
                Leader reconnu du BTP à La Réunion depuis 2009
              </p>
            </div>
            {/* 3D Effect on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent transition-opacity duration-500 ${
                hoveredCard === 'main' ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Stats Card 1 */}
          <div
            data-animate="stat-1"
            className={`relative group bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl p-6 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['stat-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-5xl font-bold text-white">500+</div>
              <div>
                <div className="text-white/90 font-medium">Projets Réalisés</div>
                <div className="text-white/70 text-sm mt-1">
                  Maisons, villas et bâtiments
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
          </div>

          {/* Stats Card 2 */}
          <div
            data-animate="stat-2"
            className={`relative group bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-500 ${
              isVisible['stat-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-5xl font-bold text-amber-500">98%</div>
              <div>
                <div className="text-gray-800 font-medium">Satisfaction</div>
                <div className="text-gray-600 text-sm mt-1">
                  Clients recommandent
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card - Wide */}
          <div
            data-animate="feature"
            className={`lg:col-span-2 relative group bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['feature'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-white">
                  L'Entretien Patrimonial
                </h3>
                <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-white/80 mt-4">
                Notre différence : Un service unique de maintenance qui protège votre investissement année après année.
              </p>
            </div>
          </div>

          {/* Expertise Card */}
          <div
            data-animate="years"
            className={`relative group bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-3xl p-6 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['years'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                100%
              </div>
              <div className="text-gray-700 font-medium mt-2">Expertise</div>
              <div className="text-gray-600 text-sm">Multi-Métiers</div>
            </div>
          </div>

          {/* Team Card */}
          <div
            data-animate="team"
            className={`relative group bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible['team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <img
              src="/entretien.jpg"
              alt="Équipe AMMO"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-white font-bold">Équipe Experte</div>
              <div className="text-white/80 text-sm">Professionnels qualifiés</div>
            </div>
          </div>

          {/* Services Grid - Wide */}
          <div
            data-animate="services"
            className={`md:col-span-2 bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl transition-all duration-700 hover:shadow-2xl hover:border-amber-500 ${
              isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏗️', text: 'Construction' },
                { icon: '🔧', text: 'Rénovation' },
                { icon: '📐', text: 'Extension' },
                { icon: '🌳', text: 'Extérieur' },
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                  <span className="text-gray-700 group-hover:text-amber-500 transition-colors">{service.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card - Wide */}
          <div
            data-animate="cta"
            className={`lg:col-span-2 relative group bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl p-8 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
              isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Prêt à concrétiser votre projet ?
                </h3>
                <p className="text-white/90">
                  Contactez-nous pour un devis gratuit
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                DEVIS GRATUIT
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div
          data-animate="description"
          className={`mt-16 text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible['description'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            AMMO Construction s'engage à transformer vos projets immobiliers en réalité durable.
            Notre approche unique combine expertise technique, innovation et service d'entretien patrimonial
            pour garantir la pérennité de votre investissement.
          </p>
        </div>
      </div>

    </section>
  );
}