/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: '#e9ab53',
        red: '#f15e50',
        offWhite: '#fffdfa',
        grayish: '#c5c6ce',
        darkGrayish: '#5d5f79',
        darkBlue: '#00001a'
      },
      fontFamily: {
        inter : ['Inter']
      }
    },
  },
  plugins: [],
}

