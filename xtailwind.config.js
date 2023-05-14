/* eslint-disable @typescript-eslint/naming-convention,@typescript-eslint/quotes */
/** @type {import('tailwindcss').Config} */

const translate = {};
const heightWidth = {};
const leading = {};
const fontSize = {};
const maxMinWidth = {};
const borderRadius = {};

for (let i = 0; i <= 300; i++) {
  translate[i] = `${i}px`;
}

for (let i = 0; i <= 128; i++) {
  leading[i] = `${i}px`;
}

for (let i = 6; i <= 80; i++) {
  fontSize[i] = [`${i}px`, `${i}px`];
}

for (let i = 0; i <= 40; i++) {
  borderRadius[i] = `${i}px`;
}

for (let i = 130; i <= 500; i++) {
  heightWidth[i * 2] = `${i * 2}px`;
}

for (let i = 0; i <= 500; i++) {
  maxMinWidth[i] = `${i}px`;
}

module.exports = {
  prefix: '',
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,style}'],
  darkMode: 'false',
  variants: {
    extends: {}
  },
  // important: true,
  // plugins: [require('tw-elements/dist/plugin')],
  theme: {
    extend: {
      translate: {
        ...translate
      },
      height: {
        ...heightWidth
      },
      lineHeight: {
        ...leading
      },
      spacing: {
        279: '279px'
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768', max: '991px' },
        mdMax: { max: '768px' },
        lg: { min: '992', max: '1199px' },
        xl: { min: '1201', max: '1400px' },
        xxl: { min: '1401', max: '1600px' }
      },
      borderRadius: {
        ...borderRadius,
        full: '9999px'
      },
      backgroundImage: {
        'login-texture': "url('./assets/images/login-texture.png')",
        'base-menu': "url('./assets/images/base-menu.png')"
      }
    },
    maxMinWidth: {
      ...maxMinWidth,
      '33.33p': '33.33%',
      '66.66p': '66.66%',
      '100p': '100%'
    },
    minWidth: {
      ...maxMinWidth,
      '33.33p': '33.33%',
      '66.66p': '66.66%',
      '100p': '100%'
    },
    fontFamily: {
      primary: ["'Comfortaa', cursive"]
    },
    fontSize,
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
      'if-secondary': {
        50: '#fffee6',
        100: '#FDFFE6',
        200: '#FDFFB8',
        300: '#FFFF8F',
        400: '#FFFA66',
        500: '#FFF23D',
        600: '#FFE715',
        700: '#B39500',
        800: '#8C7000',
        900: '#664E00',
        light: '#ffff59',
        DEFAULT: '#ffdb15',
        dark: '#c7ab00'
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

    borderWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      '1-2': '.5px',
      '1-5': '1.5px',
      4: '4px',
      8: '8px',
      90: '90px'
    },
    variants: {
      fontSize: ['responsive', 'hover'],
      translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      extend: {
        textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'visited'],
        tableLayout: ['hover', 'focus'],
        scale: ['active', 'group-hover']
      }
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1396px'
      // => @media (min-width: 1400px) { ... }
    }
  }
};
