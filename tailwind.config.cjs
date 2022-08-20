const daisyui = require('daisyui');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['night', {
      light: {
        primary: '#3ABFF8',
        secondary: '#828DF8',
        accent: '#F471B5',
        neutral: '#1D283A',
        'base-100': '#fEfEfE',
        info: '#0CA6E9',
        success: '#2BD4BD',
        warning: '#F4C152',
        error: '#FB6F84',
      },
    }],
  },
};
