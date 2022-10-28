import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const activeClassName =
    "px-3 py-1 text-indigo-500 underline hover:text-indigo-600";
  const notActiveClassName = "px-3 py-1 hover:text-indigo-600";
  const mobileNavClicked =
    "flex flex-col items-center md:hidden bg-white rounded-b-xl container mx-auto pb-4 shadow-xl text-xl";
  const mobileNavNotClicked = "hidden";

  const title = "{Programming Mastery}";

  const openClicked = () => {
    setClicked(true);
  };
  const closeClicked = () => {
    setClicked(false);
  };

  return (
    <div>
      <div className="container mx-auto md:flex justify-between mt-5 bg-white p-4 hidden items-center">
        <NavLink
          className="font-bold text-3xl text-[#2D357D] flex items-center"
          to="/"
        >
          <img src={Logo} className="h-16" alt="Logo" />
          <div className="font-merienda">{title}</div>
        </NavLink>
        <div className="font-bold text-2xl text-[#2D357D]">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Courses"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/FAQ"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            Login
          </NavLink>
        </div>
      </div>
      <div className="container mx-auto bg-white shadow-xl flex justify-between p-4 md:hidden">
        <div>
          <NavLink
            className="font-bold text-xl text-[#2D357D] flex items-center"
            to="/"
          >
            <img src={Logo} className="h-10" alt="Logo" />
            <div className="font-merienda">{title}</div>
          </NavLink>
        </div>
        <button
          className="flex justify-end"
          onClick={clicked ? closeClicked : openClicked}
        >
          {clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={clicked ? mobileNavClicked : mobileNavNotClicked}>
        <NavLink to="/Home" className="px-3 py-1 text-[#2D357D]">
          Home
        </NavLink>
        <NavLink to="/Blog" className="px-3 py-1 text-[#2D357D]">
          Courses
        </NavLink>
        <NavLink to="/Blog" className="px-3 py-1 text-[#2D357D]">
          FAQ
        </NavLink>
        <NavLink to="/Blog" className="px-3 py-1 text-[#2D357D]">
          Blog
        </NavLink>
        <NavLink to="/Blog" className="px-3 py-1 text-[#2D357D]">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
