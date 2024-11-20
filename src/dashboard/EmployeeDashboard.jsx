import Task from "../components/task";
import Head from "../others/head";

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = ({ userName }) => {
  return (
    <>
      {" "}
      <Head pageName="Employee Dashboard" userName={userName} />
      <Task />
    </>
  );
};

export default EmployeeDashboard;
