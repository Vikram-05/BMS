import React, { useState, createContext } from 'react'

export const doctorInfo = createContext();


function DoctorInfoProvider({ children }) {
  const [doctorId, setDoctorId] = useState("");
  const [doctorFullName, setDoctorFullName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorAadhar, setDoctorAadhar] = useState("");
  const [role, setRole] = useState("");
  const [doctorLicense, setDoctorLicense] = useState("");
  const [doctorPhoneNumber, setDoctorPhoneNumber] = useState("");
  const [doctorSpecializations, setDoctorSpecializations] = useState([]);  

  return (
    <doctorInfo.Provider value={{ doctorId, doctorFullName, doctorEmail, doctorAadhar, doctorPhoneNumber, doctorLicense, doctorPassword, setDoctorId, setDoctorFullName, setDoctorEmail, setDoctorAadhar, setDoctorLicense, role, setRole, setDoctorPhoneNumber, setDoctorPassword ,doctorSpecializations,setDoctorSpecializations}}>
      {children}
    </doctorInfo.Provider>
  )
}

export default DoctorInfoProvider;