import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Microlys lancia la nuova serie di router 5G industriali',
      excerpt: 'La nuova gamma di router 5G rappresenta un salto tecnologico per le applicazioni industriali critiche, garantendo connettività ultra-affidabile.',
      date: '15 Aprile 2026',
      category: 'Prodotti',
      imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership strategica con leading telco europeo',
      excerpt: 'Accordo pluriennale per la fornitura di soluzioni IoT e gateway industriali per smart cities.',
      date: '10 Aprile 2026',
      category: 'Azienda',
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Certificazione ISO 27001 per la sicurezza informatica',
      excerpt: 'Microlys ottiene la certificazione ISO 27001, consolidando il suo impegno per la sicurezza dei dati.',
      date: '5 Aprile 2026',
      category: 'Qualità',
      imageSrc: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Investimento in R&D per tecnologie Edge Computing',
      excerpt: 'Nuovo laboratorio di ricerca dedicato allo sviluppo di soluzioni edge computing per Industry 4.0.',
      date: '28 Marzo 2026',
      category: 'Innovazione',
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Espansione nel mercato delle energie rinnovabili',
      excerpt: 'Nuove soluzioni di monitoraggio e controllo per impianti fotovoltaici ed eolici.',
      date: '22 Marzo 2026',
      category: 'Settori',
      imageSrc: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Partecipazione a Hannover Messe 2026',
      excerpt: 'Microlys sarà presente alla più importante fiera industriale europea con le sue ultime innovazioni.',
      date: '15 Marzo 2026',
      category: 'Eventi',
      imageSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&q=80'
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16">
          <div className="w-16 h-1 bg-red-600 mb-6"></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            News & Aggiornamenti
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Rimani aggiornato sulle ultime novità, innovazioni e traguardi di Microlys
          </p>
        </div>

        {featuredNews && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-1 bg-red-600 text-white text-sm font-medium mb-4">
                  {featuredNews.category}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                  <span>{featuredNews.date}</span>
                </div>
                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all">
                  Leggi di più
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={featuredNews.imageSrc}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden mb-4">
                <ImageWithFallback
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium">
                  {item.category}
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-2">{item.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.excerpt}
              </p>
              <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Leggi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
