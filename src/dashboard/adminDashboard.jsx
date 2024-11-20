import Head from "../others/head";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full bg-slate-800 flex flex-col gap-5">
      <Head pageName="Admin Dashboard" />

      <div className="body flex flex-col gap-3 p-3 bg-slate-700 rounded-xl justify-center  items-center h-screen ">
        <h1 className="text-3xl font-bold text-white">Task Creation Form</h1>
        <form className="bg-slate-600 p-5 rounded-xl flex flex-col gap-3 w-1/3 min-w-[300px]">
          <div className="taskName  flex flex-col gap-1">
            <p className="text-xl text-center text-white ">Task Name</p>
            <input
              className="outline-none border-none text-lg text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg"
              type="text"
              placeholder="Enter Task Name"
            />
          </div>
          <div className="taskDescription">
            <p className="text-xl text-center text-white ">Task Description</p>
            <textarea
              className="outline-none border-none text-lg text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg h-[100px] w-full"
              type="text"
              placeholder="Enter Task Description"
            />
          </div>
          <div className="taskDate">
            <p className="text-xl text-center text-white ">Task Date</p>
            <input
              className="outline-none border-none text-lg text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg w-full"
              type="date"
            />
          </div>
          <div className="taskTime">
            <p className="text-xl text-center text-white ">Task Time</p>
            <input
              className="outline-none border-none text-lg text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg w-full"
              type="time"
            />
          </div>
          <div className="taskPrice">
            <p className="text-xl text-center text-white ">Task Price</p>
            <input
              className="outline-none border-none text-lg text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg w-full"
              type="number"
            />
          </div>
          <button className="w-full bg-slate-900 text-white p-3 rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
