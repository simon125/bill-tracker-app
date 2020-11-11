import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
html {
    font-family: 'Work Sans', sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover{
    color: inherit;

  }
`;

export const theme = {
  blueDark: '#145e90',
  blueLight: '#298dcf',
  blueLightHover: '#62bcf821',
  grey: '#a3a8ab',
  light: '#EEEEEE',
};
