import { useState } from 'react'
import DoctorDashboard from './Pages/DoctorDashboard'
import PatientDashboard from './Pages/PatientDashboard2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PatientDashboard />
      {/* <DoctorDashboard /> */}
    </>
  )
}

export default App
