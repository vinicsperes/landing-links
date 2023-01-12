import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'JetBrains Mono', monospace;
    color: ${(props) => props.theme.textColor};
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: url(${(props) => props.theme.bgLightPath});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

    @media only screen and (max-width: 1080px) {
      background: url(${(props) => props.theme.bgLightMobilePath});
    }
  }
`
