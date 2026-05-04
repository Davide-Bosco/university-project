import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export default function ProdottiSoluzioni() {
  const categories = [
    {
      id: 'router-switch',
      title: 'Router e Switch',
      description: 'Dispositivi di rete industriali ad alte prestazioni per connessioni sempre garantite',
      imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=80',
      products: ['Router 4G/5G', 'Switch Industriali', 'Router VPN', 'Firewall Integrati']
    },
    {
      id: 'iot-devices',
      title: 'Dispositivi IoT/M2M',
      description: 'Soluzioni innovative per Internet of Things e comunicazione machine-to-machine',
      imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80',
      products: ['Moduli IoT', 'Sensori Wireless', 'Gateway M2M', 'Edge Computing']
    },
    {
      id: 'gateway',
      title: 'Gateway Industriali',
      description: 'Gateway robusti progettati per ambienti industriali e applicazioni critiche',
      imageSrc: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
      products: ['Gateway Fieldbus', 'Protocolli Industriali', 'Edge Gateway', 'Cloud Connectivity']
    },
    {
      id: 'software',
      title: 'Software di Gestione',
      description: 'Piattaforme avanzate per il monitoraggio, controllo e automazione delle reti',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      products: ['Network Management', 'Remote Monitoring', 'Analytics Platform', 'API Integration']
    },
    {
      id: 'accessories',
      title: 'Accessori',
      description: 'Accessori e componenti complementari per completare le tue soluzioni',
      imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
      products: ['Antenne', 'Alimentatori', 'Cavi', 'Sistemi di Montaggio']
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="relative h-96 bg-gradient-to-r from-black to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop&q=80"
            alt="Products Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <div className="inline-block px-4 py-1 bg-red-600/20 backdrop-blur-md rounded-full border border-red-500/30 mb-6">
            <span className="text-sm font-medium text-red-400">Catalogo Completo</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Prodotti e Soluzioni
          </h1>
          <p className="text-xl text-gray-300">
            Tecnologie avanzate per connettività, IoT e automazione industriale
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div key={category.id} className="group">
              <div className="relative h-80 overflow-hidden mb-6">
                <ImageWithFallback
                  src={category.imageSrc}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6">{category.description}</p>

              <ul className="space-y-3 mb-6">
                {category.products.map((product, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {product}
                  </li>
                ))}
              </ul>

              <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Scopri di più
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-red-600/80 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            💡 Consulenza Gratuita
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hai bisogno di una soluzione personalizzata?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Il nostro team di ingegneri è pronto a progettare la soluzione perfetta per le tue esigenze
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contatti" className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold transition-all hover:shadow-xl rounded">
              Richiedi Demo Gratuita →
            </Link>
            <Link to="/supporto" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium border-2 border-white/30 transition-all rounded">
              Parla con un Esperto
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">2h</div>
              <div className="text-sm text-gray-400">Tempo di risposta</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-sm text-gray-400">Consulenza gratuita</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">30 min</div>
              <div className="text-sm text-gray-400">Demo personalizzata</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
