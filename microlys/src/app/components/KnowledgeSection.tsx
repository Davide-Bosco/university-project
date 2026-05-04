export default function KnowledgeSection() {
  const values = [
    {
      number: "01",
      title: "Qualità",
      description: "Il nostro reparto R&D incarna la nostra dedizione alla qualità e all'innovazione continua"
    },
    {
      number: "02",
      title: "Competenze",
      description: "Team di professionisti esperti con competenze in R&D e innovazione di prodotto"
    },
    {
      number: "03",
      title: "Eccellenza",
      description: "Analisi costante dei benchmark di settore per prodotti elettronici complessi"
    },
    {
      number: "04",
      title: "Flessibilità",
      description: "Processi produttivi che ottimizzano l'intero ciclo di vita del prodotto"
    }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Cosa ci guida
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              L'eccellenza in R&D per una qualità senza compromessi.
              La nostra esperienza e dedizione ci posizionano come leader nell'adozione di tecnologie industriali avanzate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-red-600 transition-all duration-500"
              >
                <div className="text-6xl font-bold text-red-600/20 group-hover:text-red-600/40 transition-colors mb-4">
                  {value.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">30+</div>
            <div className="text-gray-400">Anni di esperienza</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-400">Progetti completati</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-400">Made in Italy</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-400">Supporto clienti</div>
          </div>
        </div>
      </div>
    </section>
  );
}
