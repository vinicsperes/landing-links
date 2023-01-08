import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-image: url('../../../src/assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
