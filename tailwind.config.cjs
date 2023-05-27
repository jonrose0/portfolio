/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'] 
    },
    colors: {
      header: '#0b1c2b',
      main: '#000d19',
      secondary: '#ffffff',
      hover: '#1c6667',
      red: '#e44d26',
      blue: '#006db2',
      yellow: '#f7d724',
      green: '#0f460f',
      transparent: 'transparent'
    },
    extend: {
      gridTemplateColumns: {
        'fluid-sm': 'repeat(auto-fit, minmax(17rem, 1fr))',
        'fluid-md': 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      animation: {
        slideDown: 'slideDown 1s ease',
        slideLeft: 'slideLeft 0.5s ease 0.5s forwards'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },  '100%': { transform: 'translateY(0%)' }
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(300%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
}
