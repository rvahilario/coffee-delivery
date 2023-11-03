import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ChakraProvider } from '@chakra-ui/react'
import { OrderContextProvider } from './contexts/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ChakraProvider theme={defaultTheme}>
        <BrowserRouter>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </ThemeProvider>
  )
}
