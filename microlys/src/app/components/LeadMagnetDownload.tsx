import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Resource {
  title: string;
  description: string;
  type: string;
  pages: string;
  imageSrc: string;
}

export default function LeadMagnetDownload() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [downloaded, setDownloaded] = useState(false);

  const resources: Resource[] = [
    {
      title: 'Guida Completa ai Router Industriali 5G',
      description: 'Tutto quello che devi sapere per scegliere e implementare router 5G in ambiente industriale',
      type: 'PDF Guide',
      pages: '42 pagine',
      imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=500&fit=crop'
    },
    {
      title: 'Whitepaper IoT & Industry 4.0',
      description: 'Come integrare soluzioni IoT nella tua azienda per massimizzare efficienza e ROI',
      type: 'Whitepaper',
      pages: '28 pagine',
      imageSrc: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=500&fit=crop'
    },
    {
      title: 'Checklist Sicurezza Reti Industriali',
      description: 'Checklist pratica per proteggere la tua infrastruttura di rete da minacce cyber',
      type: 'Checklist',
      pages: '15 pagine',
      imageSrc: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=500&fit=crop'
    },
    {
      title: 'Case Study: Trasformazione Digitale',
      description: 'Come aziende leader hanno implementato soluzioni Microlys con risultati misurabili',
      type: 'Case Study',
      pages: '35 pagine',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop'
    }
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      setSelectedResource(null);
      setDownloaded(false);
      setFormData({ name: '', email: '', company: '' });
    }, 3000);
  };

  return (
    <section className="w-full py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            📚 Risorse Gratuite
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Scarica Guide e Whitepaper Gratuiti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contenuti tecnici di valore per aiutarti a prendere decisioni informate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedResource(resource)}
            >
              <div className="relative h-80 overflow-hidden rounded-lg mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                <ImageWithFallback
                  src={resource.imageSrc}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                  {resource.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs mb-1">{resource.pages}</div>
                  <h3 className="font-bold text-lg leading-tight">{resource.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Scarica Gratis
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded mb-2">
                    {selectedResource.type}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedResource.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedResource.description}</p>
                </div>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!downloaded ? (
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Aziendale *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Azienda
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-4">
                    <input type="checkbox" required className="mt-1" />
                    <label className="text-sm text-gray-600">
                      Accetto di ricevere comunicazioni da Microlys e ho letto la{' '}
                      <a href="#" className="text-red-600 hover:underline">privacy policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-bold text-lg transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Scarica Ora Gratuitamente
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Nessun costo. Download immediato via email.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Download in corso! 🎉</h3>
                  <p className="text-gray-600">Controlla la tua email per il link di download</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
