export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'ISO 9001',
      subtitle: 'Certificato'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'ISO 27001',
      subtitle: 'Sicurezza'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Made in Italy',
      subtitle: '100%'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Supporto 24/7',
      subtitle: 'Sempre attivo'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '99.9% Uptime',
      subtitle: 'Garantito'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '30+ Anni',
      subtitle: 'Esperienza'
    }
  ];

  const clients = [
    'Telecom Italia',
    'Enel',
    'A2A',
    'ENI',
    'Ferrovie dello Stato',
    'Poste Italiane'
  ];

  return (
    <section className="w-full py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Qualità e Affidabilità Certificata
          </h3>
          <p className="text-gray-600">
            Scelto dalle più importanti aziende italiane
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-all group"
            >
              <div className="text-red-600 mb-2 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div className="font-bold text-gray-900 text-sm">{badge.title}</div>
              <div className="text-xs text-gray-500">{badge.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500 mb-6">Clienti che si fidano di noi:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-gray-400 font-semibold hover:text-red-600 transition-colors cursor-pointer"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=faces" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            </div>
            <span className="text-sm text-gray-600">+500 clienti soddisfatti</span>
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg font-bold text-gray-900">Rating medio 4.9/5</p>
          <p className="text-sm text-gray-600">Basato su 250+ recensioni verificate</p>
        </div>
      </div>
    </section>
  );
}
