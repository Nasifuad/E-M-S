import Login from "./auth/login";
import AdminDashboard from "./dashboard/adminDashboard";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";

function App() {
  return (
    <>
      <Login />
      <AdminDashboard />
      <EmployeeDashboard />
    </>
  );
}

export default App;
