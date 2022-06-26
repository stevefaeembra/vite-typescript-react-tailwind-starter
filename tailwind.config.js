/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Override the default Tailwind theme config here.
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-debug-screens')],
};
