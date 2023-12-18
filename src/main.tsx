import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from './components/styled/theme'
import ToggleContext, { ToggleProvider } from './toggler'
import { injectStore } from './services/config'
import StyledToaster from './components/styled/toaster'
import { Analytics } from "@vercel/analytics/react"

injectStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToggleProvider>
      <ToggleContext.Consumer>
        {(value) => (
          <ThemeProvider theme={value.theme === "light" ? defaultTheme : darkTheme} >
            <Provider store={store}>
              <StyledToaster />
              <App />
            </Provider>
          </ThemeProvider>)
        }
      </ToggleContext.Consumer>
    </ToggleProvider>
    <Analytics />
  </React.StrictMode>,
)
