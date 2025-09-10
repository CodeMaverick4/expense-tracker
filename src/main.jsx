import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/authContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <Provider store={store}>
        <App />
        </Provider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
