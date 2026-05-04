import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ChiSiamo() {
  const values = [
    {
      title: 'Innovazione',
      description: 'Investiamo costantemente in ricerca e sviluppo per anticipare le esigenze del mercato',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Qualità',
      description: 'Ogni prodotto è sottoposto a rigorosi test di qualità e certificazioni internazionali',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Made in Italy',
      description: 'Orgogliosamente italiani, progettiamo e produciamo in Italia con eccellenza manifatturiera',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sostenibilità',
      description: 'Impegnati nella riduzione dell\'impatto ambientale e nell\'economia circolare',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
        </svg>
      )
    }
  ];

  const milestones = [
    { year: '1990', event: 'Fondazione di Microlys a Milano' },
    { year: '1995', event: 'Primo router industriale certificato' },
    { year: '2005', event: 'Espansione nel mercato IoT' },
    { year: '2010', event: 'Apertura centro R&D avanzato' },
    { year: '2015', event: 'Lancio piattaforma cloud per gestione dispositivi' },
    { year: '2020', event: 'Certificazione ISO 9001 e ISO 14001' },
    { year: '2025', event: 'Leadership nel mercato 5G industriale' }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
            alt="About Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">
            Chi Siamo
          </h1>
          <p className="text-2xl text-gray-200">
            Oltre 30 anni di innovazione italiana nella tecnologia industriale
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              La nostra missione
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Microlys è un produttore italiano di dispositivi di rete, router e soluzioni IoT, progettati per accelerare la trasformazione digitale. Con un focus su affidabilità e performance, forniamo tecnologie avanzate per telecomunicazioni, sicurezza e raccolta dati.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rispondiamo alle esigenze di operatori telco, aziende ed istituzioni con soluzioni che combinano innovazione tecnologica e qualità manifatturiera italiana.
            </p>
          </div>
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
              alt="Team Working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              I nostri valori
            </h2>
            <p className="text-xl text-gray-600">
              Ciò che guida ogni nostra decisione e innovazione
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              La nostra storia
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-24">
                    <div className="text-3xl font-bold text-red-600">{milestone.year}</div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="w-4 h-4 bg-red-600 rounded-full mb-2"></div>
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">30+</div>
              <div className="text-gray-400">Anni di esperienza</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-400">Progetti completati</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-400">Made in Italy</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400">Supporto clienti</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
