const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss}'],
  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: '#FFE8B6',
      secondary: '#D99E82',
      tertiary: '#CC927A',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
