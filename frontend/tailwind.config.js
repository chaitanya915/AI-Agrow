/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        emeraldGlow: '#00ff88',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'apple-dark': '0 8px 30px rgba(0, 0, 0, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
      },
      backdropBlur: {
        glass: '16px',
      },
    },
  },
  plugins: [],
};