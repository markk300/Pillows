const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mono:["'DM Sans'",...defaultTheme.fontFamily.mono]
      },
      colors:{
        primary:'#1F3951',
        secondary:'#406C93',
        promotion:'#DFEEF7',
      },
      padding:{
        DEFAULT:"1rem",
      },
    },
  },
  plugins: [],
}