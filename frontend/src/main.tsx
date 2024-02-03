import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SpotightTab from './components/Spotlight/SpotlightTab.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <nav className="navigation-bar">
      <SpotightTab/>
    </nav>
    <App />
  </React.StrictMode>,
)
