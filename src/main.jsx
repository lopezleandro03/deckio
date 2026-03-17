import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@deckio/deck-engine/styles/global.css'
import '@deckio/deck-engine/themes/dark.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
