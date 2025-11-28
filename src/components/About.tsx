import { Language } from '../types';
import { translations } from '../translations';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {t.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 leading-relaxed text-center mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
