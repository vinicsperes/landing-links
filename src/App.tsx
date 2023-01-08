import { ThemeProvider } from 'styled-components'
import { Links } from './pages/Links'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Links />
    </ThemeProvider>
  )
}
