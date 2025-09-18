
import { useState } from 'react'
import DoctorDashboard from './Pages/DoctorDashboard'
import PatientDashboard from './Pages/PatientDashboard2'
import './App.css'
import AiGenerated from './Pages/AiGenerated'
import PatientSignup from './Pages/PatientSignup'
import PatientLogin from './Pages/PatientLogin'



function App() {

  return (
    <>
    <PatientLogin />
    {/* <PatientSignup /> */}
    {/* <AiGenerated /> */}
    {/* <PatientDashboard /> */}
      {/* <DoctorDashboard /> */}
    </>
  )
}

export default App;