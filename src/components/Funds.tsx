import { Language } from '../types';
import { translations } from '../translations';
import { TrendingUp, DollarSign, Scale, Leaf, Zap, Target } from 'lucide-react';

interface FundsProps {
  currentLang: Language;
}

export default function Funds({ currentLang }: FundsProps) {
  const t = translations[currentLang].funds;
  const topFunds = translations[currentLang].topFunds;

  const icons = [TrendingUp, DollarSign, Scale, Leaf, Zap, Target];
  const colors = [
    { bg: 'from-blue-500 to-blue-600', border: 'border-blue-200 hover:border-blue-400' },
    { bg: 'from-emerald-500 to-emerald-600', border: 'border-emerald-200 hover:border-emerald-400' },
    { bg: 'from-violet-500 to-violet-600', border: 'border-violet-200 hover:border-violet-400' },
    { bg: 'from-green-500 to-green-600', border: 'border-green-200 hover:border-green-400' },
    { bg: 'from-cyan-500 to-cyan-600', border: 'border-cyan-200 hover:border-cyan-400' },
    { bg: 'from-orange-500 to-orange-600', border: 'border-orange-200 hover:border-orange-400' }
  ];

  return (
    <section id="funds" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.categories.map((category, index) => {
            const Icon = icons[index];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 ${color.border} transition-all hover:shadow-lg transform hover:-translate-y-2`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-12 rounded-2xl border-2 border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{topFunds.title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {topFunds.items.map((fund, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-700 font-semibold leading-relaxed">{fund}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
