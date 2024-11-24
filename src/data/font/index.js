'use client';

import { createTheme } from '@mui/material';
// import { createTheme } from '@mui/material/styles';

// // Assuming you have a theme setup
// const theme = createTheme({
//   typography: {
//     fontFamily: '"--font-iransans", Arial, sans-serif', // Add Iransans to the font family
//     // Other typography properties like h1, h2, body1 can go here
//   },
//   // other theme customizations...
// });

// export default theme;

// import RalewayWoff2 from '../../assets/font/iransans/ultralight.ttf';

export const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url('../../assets/font/iransans/ultralight.ttf') format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
