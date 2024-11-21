/* eslint-disable react/prop-types */
import AdminTask from "../components/adminTask";
import Head from "../others/head";

const AdminDashboard = ({ adminData }) => {
  return (
    <div className="h-screen w-full bg-slate-800 flex flex-col gap-5">
      <Head pageName="Admin Dashboard" userName={adminData.name} />
      <AdminTask />
    </div>
  );
};

export default AdminDashboard;
