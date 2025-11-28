import { AlertCircle } from 'lucide-react';

export default function Disclosure() {
  return (
    <section className="py-8 bg-yellow-50 border-y border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-4">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div className="text-gray-800 leading-relaxed">
            <p className="font-semibold mb-2">Important Disclosure</p>
            <p>
              Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
              Past performance is not an indicator of future results. I act only as a Mutual Fund Distributor (ARN: 309387).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
