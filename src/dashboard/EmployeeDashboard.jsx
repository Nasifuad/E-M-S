/* eslint-disable react/prop-types */
import Task from "../components/task";
import Head from "../others/head";

const EmployeeDashboard = ({ userData }) => {
  return (
    <>
      {" "}
      <Head pageName="Employee Dashboard" userName={userData.name} />
      <Task userData={userData} />
    </>
  );
};

export default EmployeeDashboard;
