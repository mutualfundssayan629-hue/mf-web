export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated: {currentYear}</strong>
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We collect Name, Phone, Email (optional) and Message when you contact us. Data is stored securely
              and used only for communication and service execution. We do not sell or share data. For concerns,
              contact: <a href="mailto:roy956326@gmail.com" className="text-blue-600 hover:underline">roy956326@gmail.com</a>.
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
