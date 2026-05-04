import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600/20 backdrop-blur-md rounded-full border border-red-500/30">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-400">Made in Italy • Precision System</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Connessioni sempre,
            <br />
            ovunque e <span className="text-red-500">garantite</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
            Router industriali, gateway IoT e soluzioni di rete progettate per ambienti mission-critical.
            Affidabilità certificata per Industry 4.0.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/prodotti-soluzioni" className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold transition-all hover:shadow-2xl hover:shadow-red-600/50 text-center flex items-center justify-center gap-2">
              Scopri le Soluzioni
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/contatti" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold border-2 border-white/20 hover:border-white/40 transition-all text-center">
              Richiedi Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime garantito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Supporto tecnico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">30+</div>
              <div className="text-sm text-gray-400">Anni esperienza</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
