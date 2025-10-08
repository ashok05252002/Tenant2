/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef7f9',
          100: '#d8eef3',
          200: '#bfe2e9',
          300: '#a5d5e0',
          400: '#72bac9',
          500: '#3f9fb2',
          600: '#238396',
          700: '#006782',
          800: '#005268',
          900: '#003d4e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        green: {
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
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFFBF5',
          200: '#F5F1EB'
        }
      }
    },
  },
  plugins: [],
};
