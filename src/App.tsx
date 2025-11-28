import { useState, useEffect } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Disclosure from './components/Disclosure';
import About from './components/About';
import Services from './components/Services';
import SchemeLinks from './components/SchemeLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const path = window.location.pathname;
    if (path === '/privacy') {
      setCurrentPage('privacy');
    } else if (path === '/terms') {
      setCurrentPage('terms');
    } else {
      setCurrentPage('home');
    }

    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/privacy') {
        setCurrentPage('privacy');
      } else if (path === '/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.getAttribute('href')?.startsWith('/')) {
        const href = link.getAttribute('href');
        if (href === '/privacy' || href === '/terms' || href === '/') {
          e.preventDefault();
          const newPage = href === '/privacy' ? 'privacy' : href === '/terms' ? 'terms' : 'home';
          setCurrentPage(newPage);
          window.history.pushState({}, '', href);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms') {
    return <Terms />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <Hero currentLang={currentLang} />
      <Disclosure />
      <About currentLang={currentLang} />
      <Services currentLang={currentLang} />
      <SchemeLinks currentLang={currentLang} />
      <Contact currentLang={currentLang} />
      <Footer currentLang={currentLang} />
      <CookieBanner />
    </div>
  );
}

export default App;
