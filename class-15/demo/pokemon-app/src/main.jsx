import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="jacobknaack.auth0.com"
      clientId="sodU4AtfDd4gKUiYW2I82eC787mOo1LW"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
