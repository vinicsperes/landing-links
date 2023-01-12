import { DefaultTheme } from 'styled-components'
import { Switch, SwitchButton, Track } from './styles'
interface ThemeSwitcherProps {
  toggleTheme(): void
  theme: DefaultTheme
}

export function ThemeSwitcher({ theme, toggleTheme }: ThemeSwitcherProps) {
  return (
    <Switch onClick={toggleTheme}>
      <SwitchButton
        className={'leftAlignIcon' ?? theme.title === 'light'}
      ></SwitchButton>
      <Track></Track>
    </Switch>
  )
}
