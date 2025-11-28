import { Language } from '../types';
import { translations } from '../translations';
import { TrendingUp, Calendar, RefreshCw, FileText } from 'lucide-react';

interface ServicesProps {
  currentLang: Language;
}

export default function Services({ currentLang }: ServicesProps) {
  const t = translations[currentLang].services;

  const icons = [TrendingUp, Calendar, RefreshCw, FileText];
  const colors = [
    { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-100', text: 'text-blue-600' },
    { bg: 'from-emerald-500 to-emerald-600', light: 'bg-emerald-100', text: 'text-emerald-600' },
    { bg: 'from-orange-500 to-orange-600', light: 'bg-orange-100', text: 'text-orange-600' },
    { bg: 'from-cyan-500 to-cyan-600', light: 'bg-cyan-100', text: 'text-cyan-600' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, index) => {
            const Icon = icons[index];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Execution-only services. No personalised advisory provided.</p>
        </div>
      </div>
    </section>
  );
}
