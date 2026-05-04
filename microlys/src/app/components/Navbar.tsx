import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-end gap-6 text-sm">
            <Link to="/supporto" className="text-gray-600 hover:text-red-600 transition-colors">
              Supporto
            </Link>
            <Link to="/contatti" className="text-gray-600 hover:text-red-600 transition-colors">
              Contatti
            </Link>
            <button className="text-gray-600 hover:text-red-600 transition-colors font-medium">
              IT
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <div className="text-3xl font-bold tracking-tight leading-none">
              <span className="text-red-600">MICRO</span>
              <span className="text-gray-900">LYS</span>
            </div>
            <div className="text-xs text-gray-500 tracking-widest uppercase mt-0.5">
              Precision System
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/prodotti-soluzioni" className="text-gray-700 hover:text-red-600 transition-colors py-2 font-medium">
              Prodotti e Soluzioni
            </Link>

            <Link to="/news" className="text-gray-700 hover:text-red-600 transition-colors py-2 font-medium">
              News
            </Link>

            <Link to="/chi-siamo" className="text-gray-700 hover:text-red-600 transition-colors py-2 font-medium">
              Chi Siamo
            </Link>

            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link to="/prodotti-soluzioni" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              Prodotti e Soluzioni
            </Link>
            <Link to="/news" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              News
            </Link>
            <Link to="/chi-siamo" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              Chi Siamo
            </Link>
            <Link to="/contatti" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              Contatti
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
