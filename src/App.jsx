import { useContext, useState } from "react";
import Login from "./auth/login";
import AdminDashboard from "./dashboard/adminDashboard";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  //stores user name
  let [user, setUserName] = useState("");
  //getting data from context provider by AuthContext
  const AuthData = useContext(AuthContext);
  // console.log("This is", AuthData);
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUserName("admin");
    }
    const Info = AuthData.filter((data) => {
      if (data.email === email && data.password === password) {
        return data;
      }
    });
    setUserName("employee");
    console.log(Info[0].name);
    // setUserName(Info[0].name);
    console.log(Info);
    console.log(user);
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
