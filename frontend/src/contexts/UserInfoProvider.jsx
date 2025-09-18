import React, { useState, createContext } from 'react';

export const UserInfo = createContext();

function UserInfoProvider({ children }) {
  const [userId, setUserId] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAadhar, setAadhar] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState(""); 
  
  return (
    <UserInfo.Provider
      value={{
        userId,
        setUserId,
        userFullName,
        setUserFullName,
        userEmail,
        setUserEmail,
        userAadhar,
        setAadhar,
        userRole,
        setUserRole,
        userAge,
        setUserAge,
        userGender,
        setUserGender,
        userPhoneNumber,
        setUserPhoneNumber,
      }}
    >
      {children}
    </UserInfo.Provider>
  );
}

export default UserInfoProvider;
