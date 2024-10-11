import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
  </StrictMode>,
)
