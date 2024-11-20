import { useContext, useState } from "react";
import Login from "./auth/login";
import AdminDashboard from "./dashboard/adminDashboard";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  //stores user name
  let [user, setUser] = useState("");
  let [userName, setUserName] = useState("");
  //getting data from context provider by AuthContext
  const AuthData = useContext(AuthContext);
  // console.log("This is", AuthData);
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
    }
    const Info = AuthData.filter((data) => {
      if (data.email === email && data.password === password) {
        return data;
      }
    });
    setUser("employee");
    setUserName(Info[0].name);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard userName={userName} /> : ""}
    </>
  );
}

export default App;
