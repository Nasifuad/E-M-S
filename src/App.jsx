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
  let [adminData, setAdminData] = useState({
    name: "employee",
    email: "employee@example.com",
    password: "123",
    tasks: [],
  });

  const AuthData = useContext(AuthContext);
  const admins = AuthData.adminData;
  const employees = AuthData.userData;
  console.log("data for", admins, employees);
  console.log(AuthData);
  // const handleLogin = (email, password) => {
  //   if (email === "admin@example.com" && password === "123") {
  //     setUser("admin");
  //   }
  //   const Info = employees.filter((data) => {
  //     if (data.email === email && data.password === password) {
  //       return data;
  //     }
  //   });
  //   setUser("employee");
  //   setUserData(Info);
  // };
  const handleLogin = (email, password) => {
    // Check if the user is an admin
    const adminInfo = admins.find(
      (data) => data.email === email && data.password === password
    );
    console.log(adminInfo);
    if (adminInfo) {
      setUser("admin");
      setAdminData(adminInfo);
      return;
    }

    // Check if the user is an employee
    const employeeInfo = employees.find(
      (data) => data.email === email && data.password === password
    );
    console.log(employeeInfo);
    if (employeeInfo) {
      setUser("employee");
      setUserData(employeeInfo);
      return;
    }

    // If no match is found
    console.log("Invalid login credentials");
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
