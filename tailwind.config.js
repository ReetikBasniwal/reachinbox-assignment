/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'light-dark': '#23272C',
        'dark-date': '#171819'
      },
      transitionDuration: {
        '500': '500ms',
      }
    },
  },
  plugins: [],
}

