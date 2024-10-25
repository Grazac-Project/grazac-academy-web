/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"],
      },
      screens: {
        '2xl': { 'max': '1535px' },
        'laptop': { 'max': '1440px' },
        'xxl': { 'max': '1300px' },
        'xl': { 'max': '1200px' },
        'lgx': { 'max': '1024px' },
        'lg': { 'max': '900px' },
        'md': { 'max': '768px' },
        'sm': { 'max': '639px' },
        'xm': { 'max': '467px' },
        'xxm': { 'max': '420px' },
        'xxxm': { 'max': '415px' },
        'xxxxm': { 'max': '390px' },
        'ssxm': { 'max': '360px' },
        'sxm': { 'max': '350px' },
      },
      colors: {
        primary: '#773DD3',
        text: '#787676',
        heading: '#1D1E2C',
      },
    },
  },
  plugins: [],
}
