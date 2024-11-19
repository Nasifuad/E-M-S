import Head from "../others/head";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen w-full bg-slate-800 flex flex-col gap-5">
      <Head pageName="Employee Dashboard" />
      <div className="body flex gap-3 p-3 bg-slate-700 rounded-xl justify-between wrap ">
        <div className="card1 bg-red-500 w-1/4  text-center p-10 flex flex-col gap-5 text-white rounded-xl">
          <p className="text-3xl font-bold ">New task </p>
          <p className="text-3xl font-bold ">0</p>
        </div>
        <div className="card1 bg-blue-500 w-1/4  text-center p-10 flex flex-col gap-5 text-white rounded-xl">
          <p className="text-3xl font-bold ">Task Completed </p>
          <p className="text-3xl font-bold ">0</p>
        </div>
        <div className="card1 bg-green-500 w-1/4  text-center p-10 flex flex-col gap-5 text-white rounded-xl">
          <p className="text-3xl font-bold ">Running Task</p>
          <p className="text-3xl font-bold ">0</p>
        </div>
        <div className="card1 bg-yellow-700 w-1/4  text-center p-10 flex flex-col gap-5 text-white rounded-xl">
          <p className="text-3xl font-bold ">Failed Task </p>
          <p className="text-3xl font-bold ">0</p>
        </div>
      </div>
      <div
        id="task"
        className="p-3 bg-slate-700 rounded-xl flex gap-3 overflow-x-auto"
      >
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          id="cards"
          className="h-[400px] min-w-[300px] max-w-[400px] text-center bg-yellow-500 rounded-xl p-5 flex flex-col gap-3 "
        >
          <div className="head flex justify-between items-center">
            <p className="bg-red-600 px-3 py-2 rounded-xl font-bold text-white ">
              High
            </p>
            <p className="text-lg text-white font-bold">20 Nov 2024</p>
          </div>
          <p className="text-2xl text-slate-800 font-bold">
            Make a Youtube Video
          </p>
          <p className="text-lg text-slate-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            illum!
          </p>

          <p className="text-lg text-red-900  ">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
