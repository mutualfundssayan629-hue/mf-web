import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = translations[currentLang].nav;

  const languages = {
    en: 'English',
    hi: 'हिन्दी',
    bn: 'বাংলা'
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">Ranjit Roy</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('funds')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.topFunds}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t.contact}
            </button>

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{languages[currentLang]}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 border border-gray-100">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        onLanguageChange(code as Language);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                        currentLang === code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t.about}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t.services}
              </button>
              <button onClick={() => scrollToSection('funds')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t.topFunds}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t.contact}
              </button>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm font-semibold text-gray-500 mb-2">Language</div>
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      onLanguageChange(code as Language);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 ${
                      currentLang === code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
