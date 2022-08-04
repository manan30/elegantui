const colorsSafeList = [];

['default', 'primary', 'secondary', 'success', 'error', 'warning'].forEach(
  (color) => {
    colorsSafeList.push(`border-${color}`);
    colorsSafeList.push(`text-${color}`);
  }
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: colorsSafeList,
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
      },
      borderColor: {
        default: 'currentColor'
      }
    }
  },
  plugins: []
};
