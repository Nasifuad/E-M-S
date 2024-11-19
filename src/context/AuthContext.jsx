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
    const { employees } = GetLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
