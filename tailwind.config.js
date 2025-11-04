/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forth-plum': {
          50: '#FDBDFF',
          100: '#F2AAF4',
          200: '#E797EA',
          300: '#D171D4',
          400: '#BB4CBF',
          500: '#A526A9',
          600: '#8F0094',
          700: '#720076',
          800: '#560059',
          900: '#39003B',
        },
        'forth-fire': {
          50: '#FFF2E8',
          100: '#FFE5D0',
          200: '#FFD9B9',
          300: '#FFCCA1',
          400: '#FFB273',
          500: '#FF9944',
          600: '#FF7F15',
          700: '#CC6611',
          800: '#994C0D',
          900: '#663308',
        },
        'forth-amber': {
          50: '#FDF8EA',
          100: '#FBF1D4',
          200: '#F9EABF',
          300: '#F7E3AA',
          400: '#F2D47F',
          500: '#EEC655',
          600: '#EAB82A',
          700: '#BB9322',
          800: '#8C6E19',
          900: '#5E4A11',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
