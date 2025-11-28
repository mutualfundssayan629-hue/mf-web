import { Language } from '../types';
import { translations } from '../translations';
import { ExternalLink, FileText, Info, Building2 } from 'lucide-react';

interface SchemeLinksProps {
  currentLang: Language;
}

export default function SchemeLinks({ currentLang }: SchemeLinksProps) {
  const t = translations[currentLang].funds;

  const links = [
    {
      title: 'AMFI Official Site',
      url: 'https://www.amfiindia.com',
      icon: Building2,
      description: 'Association of Mutual Funds in India'
    },
    {
      title: 'KYC Information',
      url: 'https://www.cvlkra.com',
      icon: FileText,
      description: 'Central KYC Registry'
    },
    {
      title: 'Investor Education',
      url: 'https://www.amfiindia.com/investor-corner/online-center',
      icon: Info,
      description: 'Learn about mutual fund investments'
    }
  ];

  return (
    <section id="funds" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            For scheme details, check AMC factsheets. The following links provide useful information about mutual fund investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg transform hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Execution-only services. No personalised advisory provided.</p>
        </div>
      </div>
    </section>
  );
}
