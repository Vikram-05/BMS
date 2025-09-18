import React, { useState, createContext } from 'react'

export const userInfo = createContext();


function UserInfoProvider({ children }) {
  const [userId, setUserId] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAadhar, setAadhar] = useState("");
  const [role, setRole] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");  
  
  return (
    <userInfo.Provider value={{ userId, userFullName, userEmail, userAadhar, userAge, userPhoneNumber, userPassword, setUserId, role, setUserFullName, setUserEmail, setAadhar, setRole, setUserAge, setUserPhoneNumber, setUserPassword }}>
      {children}
    </userInfo.Provider>
  )
}

export default UserInfoProvider;