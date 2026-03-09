import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routers'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <Routes />
  </StrictMode>,
)
