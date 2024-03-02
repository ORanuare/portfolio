/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        carbon: '#1f2424',
        bones: '#f9f9f9',
        leaf: '#44bd87',
      },
    },
  },
  plugins: [],
}

