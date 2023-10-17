import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Hello World!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
