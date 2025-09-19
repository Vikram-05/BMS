import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DoctorDashboard from './Pages/DoctorDashboard';
import AiGenerated from './Pages/AiGenerated';
import PatientSignup from './Pages/PatientSignup';
import PatientLogin from './Pages/PatientLogin';
import DoctorSignup from './Pages/DoctorSignup';
import DoctorLogin from './Pages/DoctorLogin'; 


import './App.css';
import PatientDetails from './Pages/PatientDetails'
import LabDashboard from './Pages/LabDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patient-dashboard" element={<PatientLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/patient-dashboard" element={<PatientDetails />} />

        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

        <Route path="/lab-dashboard" element={<LabDashboard />} />
        <Route path="/ai-generated" element={<AiGenerated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
