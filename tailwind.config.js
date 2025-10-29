/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#FFA500',
        dark: '#0A0A0A',
        'dark-light': '#1F1F1F',
        'gray-custom': '#CCCCCC',
        'gray-dark': '#808080',
        'gray-border': '#333333',
        accent: '#DC143C',
        success: '#00FF7F'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'exo-2': ['"Exo 2"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
