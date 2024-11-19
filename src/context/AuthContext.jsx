/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../localStorage/LocalStorage";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// export const AuthContext = createContext();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    SetLocalStorage();
    const { employees, admin } = GetLocalStorage();
    setUserData(employees, admin);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
