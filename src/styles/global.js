import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-width: 100%;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    font-size: 16px;
  }

  body {
    font-family: ${props => props.theme.fonts.fontFamily}
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`
