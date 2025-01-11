import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QRcode from './components/QRcode.jsx'
import './/components/QRcode.css'


createRoot(document.getElementById('root')).render(
  
    <QRcode />
  
)
