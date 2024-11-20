/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ userData }) => {
  const [tasks] = useState(userData.tasks);
  return (
    <div>
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
      <div className="p-5 h-screen overflow-auto w-full bg-slate-800 flex gap-5">
        {tasks.map((task) => {
          return (
            <div
              key={task}
              className="card1 h-1/2  bg-red-500 w-1/4  text-center p-10 flex flex-col gap-5 text-white rounded-xl"
            >
              <p className="text-3xl font-bold ">{task} </p>
              <p className="text-3xl font-bold ">0</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
