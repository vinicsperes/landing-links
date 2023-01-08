import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --text-color: white;
    --bg-url: url('../../../src/assets/backgrounds/bg-dark.png');
    --mobile-bg-url: url('../../../src/assets/backgrounds/bg-dark-mobile.png');
    --stroke-color: rgba(255, 255, 255, 0.5);
    --surface-color: rgba(255, 255, 255, 0.1);
    --surface-color-hover: rgba(255, 255, 255, 0.5);
    --highlight-color:  rgba(255, 255, 255, 0.2);
  }

  .light {
    --text-color: black;
    --bg-url: url('../../../src/assets/backgrounds/bg-light.png');
    --mobile-bg-url: url('../../../src/assets/backgrounds/bg-light-mobile.png');
    --stroke-color: rgba(0, 0, 0, 0.5);
    --surface-color: rgba(0, 0, 0, 0.05);
    --surface-color-hover: rgba(0, 0, 0, 0.02);
    --highlight-color:  rgba(0, 0, 0, 0.1);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'JetBrains Mono', monospace;
    color: var(--text-color);
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--bg-url);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

    @media only screen and (max-width: 1080px) {
      background-image: var(--mobile-bg-url)
    }
  }
`
