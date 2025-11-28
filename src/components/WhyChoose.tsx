import { Language } from '../types';
import { translations } from '../translations';
import { CheckCircle, Lock, UserCheck, DollarSign, RotateCcw, Zap } from 'lucide-react';

interface WhyChooseProps {
  currentLang: Language;
}

export default function WhyChoose({ currentLang }: WhyChooseProps) {
  const t = translations[currentLang].whyChoose;

  const icons = [CheckCircle, Lock, UserCheck, DollarSign, RotateCcw, Zap];
  const colors = [
    { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-100', text: 'text-blue-600' },
    { bg: 'from-emerald-500 to-emerald-600', light: 'bg-emerald-100', text: 'text-emerald-600' },
    { bg: 'from-violet-500 to-violet-600', light: 'bg-violet-100', text: 'text-violet-600' },
    { bg: 'from-orange-500 to-orange-600', light: 'bg-orange-100', text: 'text-orange-600' },
    { bg: 'from-cyan-500 to-cyan-600', light: 'bg-cyan-100', text: 'text-cyan-600' },
    { bg: 'from-rose-500 to-rose-600', light: 'bg-rose-100', text: 'text-rose-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${color.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
