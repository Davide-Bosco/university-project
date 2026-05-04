import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

interface Solution {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
}

export default function SolutionsGrid() {
  const solutions: Solution[] = [
    {
      title: "Router e Switch",
      description: "Dispositivi di rete avanzati per connessioni sempre garantite e performanti",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=80",
      category: "Networking"
    },
    {
      title: "Dispositivi IoT/M2M",
      description: "Soluzioni innovative per Internet of Things e comunicazione machine-to-machine",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80",
      category: "IoT"
    },
    {
      title: "Gateway Industriali",
      description: "Gateway robusti per applicazioni industriali e ambienti critici",
      imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80",
      category: "Industrial"
    },
    {
      title: "Software di Gestione",
      description: "Piattaforme avanzate per il monitoraggio e l'automazione delle reti",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      category: "Software"
    }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            Le nostre soluzioni
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tecnologia che connette il futuro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluzioni innovative per telecomunicazioni, sicurezza e raccolta dati
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to="/prodotti-soluzioni"
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-red-600 transition-all duration-500 hover:shadow-2xl block"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={solution.imageSrc}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                  {solution.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <span className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Esplora
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
