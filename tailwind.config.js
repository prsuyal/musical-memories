/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'mm-blue' : '#BFE6FE',
        'mm-dark' : '#191A23',
        'mm-gray' : '#F3F3F3'
      }
    },
  },
  plugins: [],
}
