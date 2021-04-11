module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#E50914',
      },
      minWidth: {
        '150': '150px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
