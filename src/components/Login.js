import React from "react";
import { NavLink } from "react-router-dom";
import LoginGif from "../assets/Login.gif";

const Login = () => {
  return (
    <div className="container mx-auto md:mt-10">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:flex hidden justify-center">
          <img src={LoginGif} alt="Login" />
        </div>
        <div className="md:w-1/2 py-24 md:drop-shadow-2xl">
          <h1 className="text-center font-bold text-2xl">Login</h1>
          <form action="" className="flex flex-col p-5 items-center font-bold">
            <label className="flex items-center justify-center text-xl w-full">
              <i class="fa-solid fa-envelope border p-3 rounded-l-lg"></i>
              <input
                type="email"
                className="border border-l-0 my-4 p-2 rounded-r-lg outline-none md:w-1/2"
                placeholder="Email"
                required
              />
            </label>
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-sharp fa-solid fa-lock border p-3 rounded-l-lg"></i>
              <input
                type="password"
                className="border border-l-0 p-2 rounded-r-lg outline-none md:w-1/2"
                placeholder="Password"
                required
              />
            </label>
            <div className="w-4/6 pr-10 text-right text-lg mt-3">
              <a href="/">Forgot Password?</a>
            </div>
            <button className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600">
              <i class="fa-solid fa-right-to-bracket pr-1"></i>
              Login
            </button>
            <a href="/Signup" className="font-bold text-lg hidden md:block">
              Don't Have An Account?
            </a>
            <NavLink to="/Signup" className="font-bold text-lg md:hidden block">
              Don't Have An Account?
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
