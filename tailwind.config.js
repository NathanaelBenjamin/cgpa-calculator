/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '90%',
      },
      minHeight: {
        '12': '38rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
