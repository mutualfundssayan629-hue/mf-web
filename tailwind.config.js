/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#1EBE7D',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-in 0.2s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
