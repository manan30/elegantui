// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseTailwindConfig = require('../../tailwind-base.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseTailwindConfig,
  content: ['./**/*.tsx'],
  plugins: [require('@tailwindcss/forms')]
};
