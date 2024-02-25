/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Playfair Display'],
        secondary: ['Protest Revolution'],
      },
      colors: {
        theme: '#D4CB92',
        primary: '#2B2A31',
        secondary: '#27262B',
        textLight: '#3A3940',
      },
    },
  },
  plugins: [],
};
