/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,style}'],
  darkMode: 'false',
  variants: {
    extends: {}
  },
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./assets/background-home40opacity.png')"
      }
    },
    fontFamily: {
      primary: ["'DM Sans', sans-serif"], // 'DM Sans', sans-serif;
    },
    colors: ({ colors }) => ({
      transparent: 'transparent',
      current: 'currentColor',
      indigo: colors.indigo,
      purple: colors.purple,
      white: colors.white,
      amber: colors.amber,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      'sq-primary': {
        50: '#0581c9',
        100: '#0581c9',
        200: '#0581c9',
        300: '#0581c9',
        400: '#0581c9',
        500: '#0581c9',
        600: '#0581c9',
        700: '#0581c9',
        800: '#0581c9',
        900: '#0581c9',
        light: '#0581c9',
        DEFAULT: '#0581c9',
        dark: '#0581c9'
      },
      black: {
        light: '#03061C',
        lightTwo: '#454751',
        DEFAULT: '#0D0F19',
        dark: '#ffffff'
      },
      pink: {
        light: '#ffffff',
        DEFAULT: '#ffffff',
        dark: '#ffffff'
      },
      gray: {
        light: '#f9f9f9',
        lightTwo: '#9B9FA7',
        DEFAULT: '#616161',
        dark: '#EEF3FF',
        border: '#ebebeb',
        borderTwo: '#C1C9D9',
        borderThree: '#EFF0F2',
        borderFour: '#E6E8EE',
        borderFive: '#C1D5FE',
        borderSix: '#E4E6E9',
        borderSeven: '#E5E8EC',
        borderEight: '#ECEEF1',
        bg: '#fcfcfc',
        bgTwo: '#F8FAFF',
        bgThree: '#F4F5F8',
        bgFour: '#F5F7FB'
      },
      orange: {
        light: '#FF9720',
        DEFAULT: '#FF9720',
        dark: '#FF9720'
      },
      primary: {
        light: '#2C6AE5',
        DEFAULT: '#2C6AE5',
        dark: '#2C6AE5'
      },
      accent: {
        light: '#32C98D',
        DEFAULT: '#32C98D',
        dark: '#32C98D'
      },
      warn: {
        light: '#DF7272',
        DEFAULT: '#FF9720',
        dark: '#E2790F'
      },
      teal: {
        light: '#866AD4',
        DEFAULT: '#611BCB'
      }
    }),
  }
}

