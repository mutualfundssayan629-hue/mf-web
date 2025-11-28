import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang].hero;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="/484545464_1418881589520875_4234441394326725287_n.jpg"
                  alt="Ranjit Roy"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6 animate-fade-in-delay">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                {t.ctaPrimary}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all"
              >
                {t.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
