import React from "react";
import SignupGif from "../assets/Signup.gif";

const Signup = () => {
  return (
    <div className="container mx-auto md:mt-10">
      <div className="flex items-center">
        <div className="md:w-1/2 py-24 md:drop-shadow-2xl">
          <h1 className="text-center font-bold text-2xl">Signup</h1>
          <form
            action=""
            className="flex flex-col p-5 items-center font-bold mt-4"
          >
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-solid fa-user border p-3 rounded-l-lg"></i>
              <input
                type="text"
                className="border border-l-0 p-2 rounded-r-lg outline-none w-1/2"
                placeholder="Full Name"
                required
              />
            </label>
            <label className="flex items-center justify-center text-xl w-full">
              <i class="fa-solid fa-envelope border p-3 rounded-l-lg"></i>
              <input
                type="email"
                className="border border-l-0 my-4 p-2 rounded-r-lg outline-none w-1/2"
                placeholder="Email"
                required
              />
            </label>
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-sharp fa-solid fa-lock border p-3 rounded-l-lg"></i>
              <input
                type="password"
                className="border border-l-0 p-2 rounded-r-lg outline-none w-1/2"
                placeholder="Password"
                required
              />
            </label>
            <button className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600">
              <i class="fa-solid fa-user-plus pr-1"></i>
              Signup
            </button>
            <a href="/Login" className="font-bold text-lg">
              Already Have An Account?
            </a>
          </form>
        </div>
        <div className="md:w-1/2 md:flex hidden justify-center">
          <img src={SignupGif} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
