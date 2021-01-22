const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'myorange': '#FF8A68',
        'mypurple': '#5F3973',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
