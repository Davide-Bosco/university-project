import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-red-600/80 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              📬 Newsletter Esclusiva
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Rimani aggiornato sulle ultime innovazioni
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ricevi contenuti esclusivi, guide tecniche, case study e offerte speciali direttamente nella tua inbox.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Webinar gratuiti mensili con esperti del settore</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Guide tecniche e whitepaper scaricabili</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Accesso anticipato a nuovi prodotti e promozioni</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Aziendale</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@azienda.it"
                    required
                    className="w-full px-4 py-3 bg-white/90 text-gray-900 rounded border-2 border-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium mb-2">Interessi (opzionale)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Router & Switch', 'IoT Solutions', 'Gateway', 'Software'].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded text-red-600 focus:ring-red-500" />
                        <span className="text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-bold text-lg transition-all hover:shadow-xl"
                >
                  Iscriviti Gratuitamente →
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Niente spam. Puoi disiscriverti in qualsiasi momento.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Benvenuto a bordo! 🎉</h3>
                <p className="text-gray-300">Controlla la tua email per confermare l'iscrizione</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
