/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        primary: {
          solid: {
            DEFAULT: '#111111',
            hover: '#929292',
            active: '#e7e7e7',
            activeText: '#929292',
            disabled: '#e7e7e7',
            disabledText: '#727272',
          },
          outline: {
            DEFAULT: '#111111',
            hover: '#c8c8c8',
            active: '#f0f0f0',
            activeBorder: '#848484',
            activeText: '#7d7d7d',
            disabled: '#727272',
          },
        },
        secondary: {
          solid: {
            DEFAULT: '#ffffff',
            defaultText: '#111111',
            hover: '#e5e5e5',
            active: '#e5e5e5',
            activeText: '#7d7d7d',
            disabled: '#e5e5e5',
            disabledText: '#7d7d7d',
          },
          outline: {
            DEFAULT: '#b5b5b5',
            hover: '#c4c4c4',
            active: '#cbcbcb',
            disabled: '#7d7d7d',
          },
        },
      },
    },
  },
  plugins: [],
}
