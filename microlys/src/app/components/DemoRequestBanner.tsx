import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function DemoRequestBanner() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 backdrop-blur-md rounded-full border border-red-500/30 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-400">Consulenza Tecnica Gratuita</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Trasforma le tue esigenze in <span className="text-red-500">soluzioni concrete</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Parla con un nostro esperto per scoprire come le tecnologie Microlys possono ottimizzare la tua infrastruttura di rete
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contatti"
              className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold transition-all hover:shadow-2xl hover:shadow-red-600/50 text-center flex items-center justify-center gap-2"
            >
              Richiedi Demo Gratuita
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/supporto"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold border-2 border-white/20 hover:border-white/40 transition-all text-center"
            >
              Parla con un Esperto
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="group">
              <div className="text-3xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform">2h</div>
              <div className="text-sm text-gray-400">Tempo di risposta medio</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-gray-400">Consulenza gratuita</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform">30 min</div>
              <div className="text-sm text-gray-400">Demo personalizzata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
