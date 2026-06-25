import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Makzan } from './Components/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <Makzan>
    <App />
  </Makzan>
)