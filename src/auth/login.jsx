/* eslint-disable react/prop-types */
import { useState } from "react";
import Head from "../others/head";

const Login = ({ handleLogin }) => {
  let [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Head pageName="Login" />
      <div className="grid place-content-center w-full h-screen bg-slate-800">
        <div className="bg-slate-600 w-full p-10 rounded-xl flex flex-col items-center gap-5">
          <h2 className=" text-slate-900 p-5 w-full p-absolute top-0 text-center text-3xl uppercase font-bold">
            Login Form
          </h2>
          <form
            className="flex flex-col gap-5 "
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              x
              className="outline-none border-none text-lg text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg "
              type="email"
              required
              placeholder="Email Address"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-none text-center px-5 py-3 rounded-xl placeholder:text-black placeholder:text-lg "
              type="password"
              required
              placeholder="Password"
            />
            <div className="check flex gap-3 bg-slate-700 px-5 py-3">
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
              <p className="text-white underline hover:cursor-pointer">
                Forgot Password
              </p>
            </div>
            <button
              type="submit"
              className="bg-slate-800 text-white px-5 py-3 rounded-xl text-xl hover:bg-slate-300 hover:text-black transition-all duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-lg">
            Don`t have an account{" "}
            <span className="underline hover:cursor-pointer text-slate-300 ">
              Sign Up now
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
