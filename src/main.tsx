import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styled/theme'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import router from './routes/AuthRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme} >
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
