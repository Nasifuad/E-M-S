/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../localStorage/LocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    SetLocalStorage();
    const { employees, admin } = GetLocalStorage();
    setUserData(employees);
    setAdminData(admin);
    console.log("Test from Auth Context");
  }, []);

  return (
    <div>
      <AuthContext.Provider value={(userData, adminData)}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
