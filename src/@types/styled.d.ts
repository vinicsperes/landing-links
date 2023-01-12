import 'styled-components'
import Light from '../styles/themes/Light'

type ThemeType = typeof Light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
