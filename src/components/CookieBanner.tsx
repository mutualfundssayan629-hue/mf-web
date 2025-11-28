import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm">
          <p>
            We use cookies for site functionality. By using the site you agree to our{' '}
            <a href="/privacy" className="underline hover:text-blue-400">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Accept
          </button>
          <button
            onClick={handleAccept}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
