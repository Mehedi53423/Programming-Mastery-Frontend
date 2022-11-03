import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl">Signup</h1>
      <form action="" className="flex flex-col p-5 items-center font-bold mt-4">
        <label className="flex items-center text-xl">
          <i className="fa-solid fa-user border p-3 rounded-l-lg"></i>
          <input
            type="text"
            className="border border-l-0 p-2 rounded-r-lg outline-none"
            placeholder="Full Name"
            required
          />
        </label>
        <label className="flex items-center text-xl">
          <i className="fa-solid fa-user border p-3 rounded-l-lg"></i>
          <input
            type="email"
            className="border border-l-0 my-4 p-2 rounded-r-lg outline-none"
            placeholder="Email"
            required
          />
        </label>
        <label className="flex items-center text-xl">
          <i className="fa-sharp fa-solid fa-lock border p-3 rounded-l-lg"></i>
          <input
            type="password"
            className="border border-l-0 p-2 rounded-r-lg outline-none"
            placeholder="Password"
            required
          />
        </label>
        <div className="w-1/6 text-right text-lg mt-3">
          <a href="/">Forgot Password?</a>
        </div>
        <button className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600">
          Signup
        </button>
        <NavLink to="/Login" className="font-bold text-lg">
          Already Have An Account?
        </NavLink>
      </form>
    </div>
  );
};

export default Signup;
