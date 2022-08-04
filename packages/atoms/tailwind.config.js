/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      colors: {
        default: '#EAEAEB',
        primary: '#1e6091',
        secondary: '#184e77',
        success: '#37BE45',
        error: '#cc001b',
        warning: '#F5AB00'
      }
    }
  },
  plugins: []
};
