import { useState } from "react";
import Login from "./auth/login";
// import AuthContext from "./context/AuthContext";
import AdminDashboard from "./dashboard/adminDashboard";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
// import { GetLocalStorage, SetLocalStorage } from "./localStorage/LocalStorage";

function App() {
  let [user, userName] = useState("");

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      userName("admin");
    } else if (email === "user@example.com" && password === "123") {
      userName("employee");
    } else {
      alert("Invalid email or password");
    }
  };
  // handleLogin();
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard /> : ""}
    </>
  );
}

export default App;
