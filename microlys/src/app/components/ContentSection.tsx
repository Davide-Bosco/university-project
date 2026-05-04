import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  background?: 'white' | 'gray';
}

export default function ContentSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  background = 'white'
}: ContentSectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section className={`w-full py-24 lg:py-32 ${bgColors[background]}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? '' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative group overflow-hidden">
              <ImageWithFallback
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              {/* Tech overlay effect */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-red-600/30 transition-all duration-500"></div>
            </div>
          </div>

          <div className={`space-y-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-red-600"></div>
              <div className="text-sm font-semibold text-red-600 uppercase tracking-wider">Innovazione</div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            <Link to="/prodotti-soluzioni" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold group pt-4">
              Scopri di più
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
