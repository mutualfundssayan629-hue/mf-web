import { Language } from '../types';
import { translations } from '../translations';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ranjit Roy</h3>
            <p className="text-blue-400 font-semibold mb-4">AMFI Registered Distributor</p>
            <p className="text-gray-400 leading-relaxed text-sm">
              ARN: 309387
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mt-2">
              Execution-only mutual fund transaction support. No personalised investment advisory.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919674225341" className="hover:text-blue-400 transition-colors text-sm">
                  9674225341
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:roy956326@gmail.com" className="hover:text-blue-400 transition-colors break-all text-sm">
                  roy956326@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.address}</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <p className="text-sm">
                Howrah, West Bengal, 711310
              </p>
            </div>

            <div className="mt-6 space-x-4 text-sm">
              <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="text-blue-400 hover:underline">Terms</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-3">
            <p className="text-sm font-semibold text-white">
              AMFI-Registered Mutual Fund Distributor (ARN: 309387)
            </p>
            <p className="text-xs text-gray-400">
              Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully.
            </p>
            <p className="text-xs text-gray-400">
              © {currentYear} {t.company} | {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
