import { Links } from './pages/Links'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'

import Light from './styles/themes/Light'
import Dark from './styles/themes/Dark'
import { useState } from 'react'

export function App() {
  const [theme, setTheme] = useState(Light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? Dark : Light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Links theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
