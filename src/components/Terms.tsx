export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated: {currentYear}</strong>
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              By using this website, you agree to these terms. Ranjit Roy acts as an AMFI-Registered
              Mutual Fund Distributor (ARN: 309387) and provides execution-only services. No personalised
              investment advisory is provided.
            </p>

            <p>
              Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
              Past performance is not an indicator of future results.
            </p>

            <p>
              All information provided on this website is for general information purposes only. We do not
              guarantee the accuracy, completeness, or usefulness of any information.
            </p>

            <p>
              For any queries or concerns, please contact: <a href="mailto:roy956326@gmail.com" className="text-blue-600 hover:underline">roy956326@gmail.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
