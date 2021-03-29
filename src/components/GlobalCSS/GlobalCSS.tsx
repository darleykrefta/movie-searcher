import { createGlobalStyle } from 'styled-components'

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background: ${(props) => props.theme.colors.dark};
  }

  body {
    font-family: Roboto, sans-serif;
  }
`
