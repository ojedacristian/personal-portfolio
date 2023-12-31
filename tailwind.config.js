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
          lightGray: '#e6e6e6',
          gray: '#b3b3b3',
          orange: '#ff4200',
          darkGray: '#333'
        }
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        lato: ['var(--font-lato)']
      }
    },
    animation: {
      bounce: 'bounce 1.5s infinite'
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateX(25%)',
        },
        '50%': {
          transform: 'translateX(0)'
        }
      }
    }
  },
  plugins: [],
}
