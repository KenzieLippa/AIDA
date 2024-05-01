import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SiteContextProvider from './Context/SiteContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SiteContextProvider>

      <App />
    </SiteContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
