import { useContext, useState } from "react";
import Login from "./auth/login";

import AdminDashboard from "./dashboard/adminDashboard";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";
// import { GetLocalStorage, SetLocalStorage } from "./localStorage/LocalStorage";

function App() {
  let [user, userName] = useState(null);
  const AuthData = useContext(AuthContext);
  function checkEmail(email) {
    const emailAdd = AuthData.find((user) => user.email === email);
    if (emailAdd) return userName(emailAdd.role);
  }
  function checkPass(pass) {
    const password = AuthData.find((user) => user.password === pass);
    if (password) return userName(password.role);
  }
  const handleLogin = (email, password) => {
    const emailAdd = checkEmail(email);
    const pass = checkPass(password);
    if (emailAdd && pass) userName("admin");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard /> : ""}
    </>
  );
}

export default App;
