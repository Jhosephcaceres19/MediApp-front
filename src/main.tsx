import { StrictMode } from 'react'
import './index.css'
import ReactDOM  from 'react-dom/client'
import { Routes } from './components/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes/>
  </StrictMode>,
)
