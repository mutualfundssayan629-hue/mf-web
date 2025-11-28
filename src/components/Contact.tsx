import { useState } from 'react';
import { Language, ContactFormData } from '../types';
import { translations } from '../translations';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const t = translations[currentLang].contactForm;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<{ phone?: string; consent?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    const is10Digit = /^\d{10}$/.test(cleaned);
    const is11DigitWith91 = /^91\d{10}$/.test(cleaned);
    return is10Digit || is11DigitWith91;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: { phone?: string; consent?: string } = {};

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to be contacted';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const submission: ContactFormData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email || undefined,
      message: formData.message || undefined,
      language: currentLang
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) throw error;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission)
      });

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '', consent: false });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ranjit Roy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Phone</p>
                    <a href="tel:+919674225341" className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                      +91 96742 25341
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
                    <a href="mailto:roy956326@gmail.com" className="text-lg text-gray-900 hover:text-blue-600 transition-colors break-all">
                      roy956326@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Address</p>
                    <p className="text-lg text-gray-900">
                      Nalpur, Howrah<br />
                      West Bengal – 711310
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.namePlaceholder} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder={t.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.phonePlaceholder} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none`}
                    placeholder={t.phonePlaceholder}
                    maxLength={13}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1" role="alert">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.messagePlaceholder}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder={t.messagePlaceholder}
                    maxLength={1200}
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (errors.consent) setErrors({ ...errors, consent: undefined });
                      }}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-200"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      {t.consentLabel} *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-600 text-sm mt-1" role="alert">{errors.consent}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Sending...' : t.submitButton}</span>
                  <Send className="w-5 h-5" />
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                    {t.successMessage}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                    {t.errorMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
