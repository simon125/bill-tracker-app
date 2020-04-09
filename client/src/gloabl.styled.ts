import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
html {
    font-family: 'Work Sans', sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body{
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }
`;

export const theme = {
  primaryDark: '#2180c0',
  primaryLight: '#145e90',
  primaryDarkHover: '#2180c09f',
  light: '#EEEEEE',
};
