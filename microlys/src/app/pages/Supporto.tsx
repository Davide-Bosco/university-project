import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Supporto() {
  const supportCategories = [
    {
      title: 'Documentazione Tecnica',
      description: 'Manuali, guide e specifiche tecniche per tutti i nostri prodotti',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Download Software',
      description: 'Firmware, driver e software di gestione aggiornati',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: 'Video Tutorial',
      description: 'Guide video passo-passo per installazione e configurazione',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'FAQ',
      description: 'Risposte alle domande più frequenti dei nostri clienti',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'Come posso richiedere assistenza tecnica?',
      answer: 'Puoi compilare il form di supporto presente in questa pagina, chiamare il numero verde o aprire un ticket nel portale clienti. Il nostro team risponderà entro 4 ore lavorative.'
    },
    {
      question: 'Quale è la garanzia sui prodotti Microlys?',
      answer: 'Tutti i prodotti Microlys hanno una garanzia standard di 24 mesi dalla data di acquisto. Per alcuni prodotti industriali è possibile estendere la garanzia fino a 5 anni.'
    },
    {
      question: 'Dove posso scaricare i firmware aggiornati?',
      answer: 'I firmware più recenti sono disponibili nella sezione Download del nostro sito, accessibile previa registrazione. Riceverai anche notifiche email per gli aggiornamenti importanti.'
    },
    {
      question: 'Offrite formazione sui prodotti?',
      answer: 'Sì, organizziamo corsi di formazione sia online che in presenza presso la nostra sede. Contatta il reparto training per maggiori informazioni.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl font-bold mb-6">
            Centro Supporto
          </h1>
          <p className="text-2xl text-red-100">
            Siamo qui per aiutarti. Assistenza tecnica, documentazione e risorse
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {supportCategories.map((category, index) => (
            <div key={index} className="text-center p-8 border-2 border-gray-100 hover:border-red-600 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Domande Frequenti
            </h2>
            <p className="text-xl text-gray-600">
              Le risposte alle domande più comuni
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group border-2 border-gray-100 p-6 hover:border-red-600 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-bold text-gray-900 group-open:text-red-600">
                    {faq.question}
                  </h3>
                  <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-12 lg:p-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Richiedi Supporto Tecnico
              </h2>
              <p className="text-xl text-gray-600">
                Il nostro team risponderà entro 4 ore lavorative
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numero di Serie Prodotto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all">
                  <option>Assistenza Tecnica</option>
                  <option>Problema Hardware</option>
                  <option>Problema Software</option>
                  <option>Richiesta RMA</option>
                  <option>Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrizione del Problema *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none"
                  placeholder="Descrivi il problema nel dettaglio..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-all hover:shadow-xl"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 border-2 border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Telefono</h3>
            <p className="text-gray-600">+39 02 1234567</p>
            <p className="text-sm text-gray-500 mt-2">Lun-Ven 9:00-18:00</p>
          </div>

          <div className="text-center p-8 border-2 border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">support@microlys.com</p>
            <p className="text-sm text-gray-500 mt-2">Risposta in 4h</p>
          </div>

          <div className="text-center p-8 border-2 border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600">Chat in tempo reale</p>
            <p className="text-sm text-gray-500 mt-2">Lun-Ven 9:00-18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
