import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserInfoProvider from './contexts/UserInfoProvider'
import DoctorInfoProvider from './contexts/DoctorInfoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserInfoProvider >
      <DoctorInfoProvider>

    <App />
      </DoctorInfoProvider>
    </UserInfoProvider>
  </StrictMode>,
)
