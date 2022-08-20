// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseTailwindConfig = require('./tailwind-base.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseTailwindConfig,
  darkMode: 'class',
  content: [
    './packages/**/*.tsx',
    './packages/**/*.story.tsx',
    './.vitebook/App.tsx'
  ],
  plugins: [require('@tailwindcss/forms')]
};
