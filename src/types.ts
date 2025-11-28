export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    topFunds: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    content: string[];
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  funds: {
    title: string;
    categories: {
      title: string;
      description: string;
    }[];
  };
  whyChoose: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contactForm: {
    title: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    contact: string;
    address: string;
    copyright: string;
  };
}

export type Language = 'en' | 'hi' | 'bn';

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  language: Language;
}
