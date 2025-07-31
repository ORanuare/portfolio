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
        gravel: '#2f3434',
        bones: '#f9f9f9',
        stone: '#ebebeb',
        leaf: '#44bd87',
        heroku: '#534292',
      },
      fontSize: {
        '2xs': '.65rem',
      },
    },
  },
  plugins: [],
}

