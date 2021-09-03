/* eslint-disable prettier/prettier */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      // eslint-disable-next-line prettier/prettier
      'full': '100%',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
     inherit: 'inherit',
      none: 'none',
     '2': '2 2 0%',
     '3': '3 3 0%',
     '4': '4 4 0%',
     '5': '5 5 0%'
    },
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
       }
    },
  },
  plugins: [],
}
