import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marco Rossi',
      role: 'CTO',
      company: 'TechCorp Italia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
      quote: 'Le soluzioni Microlys hanno rivoluzionato la nostra infrastruttura di rete. Affidabilità al 99.9% e supporto eccezionale.',
      rating: 5
    },
    {
      name: 'Laura Bianchi',
      role: 'Responsabile IT',
      company: 'Industrie Avanzate SPA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
      quote: 'Implementazione rapida e ROI visibile già dal primo mese. I gateway industriali sono perfetti per il nostro ambiente produttivo.',
      rating: 5
    },
    {
      name: 'Giuseppe Ferrari',
      role: 'Operations Manager',
      company: 'SmartCity Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
      quote: 'Partner affidabile per progetti IoT su larga scala. La piattaforma di gestione è intuitiva e potente.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      company: 'Gruppo Energetico Nazionale',
      sector: 'Energie Rinnovabili',
      result: '+40% efficienza monitoraggio',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&q=80'
    },
    {
      company: 'Telecom Italia Enterprise',
      sector: 'Telecomunicazioni',
      result: '15.000 dispositivi gestiti',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80'
    },
    {
      company: 'MedTech International',
      sector: 'Healthcare',
      result: '99.99% uptime garantito',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop&q=80'
    }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            ⭐ Testimonianze
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oltre 500 aziende si affidano a Microlys per la loro infrastruttura di rete
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-red-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Case Study di Successo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-lg mb-1">{study.company}</div>
                    <div className="text-red-400 text-sm">{study.sector}</div>
                  </div>
                </div>
                <div className="bg-red-600 text-white px-4 py-3 rounded-lg text-center font-bold">
                  {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
