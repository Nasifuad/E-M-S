import { useContext, useState } from "react";
import Login from "./auth/login";
import AdminDashboard from "./dashboard/adminDashboard";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  //stores user name
  let [user, setUser] = useState("");
  let [userData, setUserData] = useState({
    name: "employee",
    email: "employee@example.com",
    password: "123",
    tasks: [],
  });
  console.log("User data test", userData);
  //getting data from context provider by AuthContext
  const AuthData = useContext(AuthContext);
  // const [adminData, setAdminData] = AuthData;
  console.log("AuthData for test", AuthData);
  // console.log("adminData for test", adminData);
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
    setUserData(Info);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard userData={userData} /> : ""}
    </>
  );
}

export default App;
