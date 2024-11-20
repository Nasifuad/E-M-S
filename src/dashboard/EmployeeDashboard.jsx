import Task from "../components/task";
import Head from "../others/head";

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = ({ userData }) => {
  return (
    <>
      {" "}
      <Head pageName="Employee Dashboard" userData={userData} />
      <Task userData={userData} />
    </>
  );
};

export default EmployeeDashboard;
