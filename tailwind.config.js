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
          50: "#f8fafb",
          100: "#f1f3f7",
          200: "#e3e8ef",
          300: "#c5cdd9",
          400: "#8b97ac",
          500: "#5a6b7f",
          600: "#3d4a5c",
          700: "#2c3a4f",
          800: "#1a2332",
          900: "#0f1419",
        },
        secondary: {
          50: "#fafbfc",
          100: "#f5f7f9",
          200: "#eef2f5",
          300: "#e0e7f0",
          400: "#c1cfe0",
          500: "#a0b0c5",
          600: "#7a8ba0",
          700: "#5a6b7f",
          800: "#3d4a5c",
          900: "#1f2937",
        },
        accent: {
          50: "#fef9f3",
          100: "#fdf2e3",
          200: "#fce5cc",
          300: "#fbd3a8",
          400: "#f9b874",
          500: "#d4a574",
          600: "#a68560",
          700: "#8b6f4e",
          800: "#6b5639",
          900: "#4a3a26",
        },
      }
    },
  },
  plugins: [],
};
