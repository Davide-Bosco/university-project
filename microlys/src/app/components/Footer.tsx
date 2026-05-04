import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-2">
              <div className="text-4xl font-bold leading-none">
                <span className="text-red-600">MICRO</span>
                <span className="text-white">LYS</span>
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                Precision System
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 mt-4">
              Innovazione italiana che semplifica e potenzia le reti.
              Soluzioni avanzate per IoT e connettività industriale.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-full flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-full flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Prodotti</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/prodotti-soluzioni" className="text-gray-400 hover:text-white transition-colors">Router e Switch</Link></li>
                <li><Link to="/prodotti-soluzioni" className="text-gray-400 hover:text-white transition-colors">Dispositivi IoT</Link></li>
                <li><Link to="/prodotti-soluzioni" className="text-gray-400 hover:text-white transition-colors">Gateway</Link></li>
                <li><Link to="/prodotti-soluzioni" className="text-gray-400 hover:text-white transition-colors">Software</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Azienda</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</Link></li>
                <li><Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors">Storia</Link></li>
                <li><Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors">Qualità</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contatti" className="text-gray-400 hover:text-white transition-colors">Contatti</Link></li>
                <li><Link to="/supporto" className="text-gray-400 hover:text-white transition-colors">Assistenza</Link></li>
                <li><Link to="/supporto" className="text-gray-400 hover:text-white transition-colors">Documentazione</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 MICROLYS. Made in Italy.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
