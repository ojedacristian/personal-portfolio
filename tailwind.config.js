/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: '#b3b3b3',
          orange: '#ff4200'
        }
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        lato: ['var(--font-lato)']
      }
    },
  },
  plugins: [],
}
