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
  theme: {
    extend: {
      colors: {
        default: '#eaeaeb',
        primary: '#1e6091',
        secondary: '#184e77',
        success: '#37be45',
        error: '#cc001b',
        warning: '#f5ab00'
      },
      borderColor: {
        default: 'currentColor'
      }
    }
  }
};
