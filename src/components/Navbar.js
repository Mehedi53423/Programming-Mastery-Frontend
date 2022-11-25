import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [mode, setMode] = useState("Lite Mode");

  const { user, logOut } = useContext(AuthContext);

  const activeClassName =
    "px-3 py-1 text-indigo-500 hover:text-indigo-600 flex items-center";
  const notActiveClassName =
    "px-3 py-1 hover:text-indigo-600 flex items-center";
  const mobileNavClicked =
    "flex flex-col items-center md:hidden bg-white rounded-b-xl container mx-auto pb-4 shadow-xl text-xl";
  const mobileNavNotClicked = "hidden";

  const title = "{Programming Mastery}";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch(console.error());
  };

  const openClicked = () => {
    setClicked(true);
  };
  const closeClicked = () => {
    setClicked(false);
  };

  const handleMode = () => {
    mode === "Lite Mode" ? setMode("Dark Mode") : setMode("Lite Mode");
  };

  return (
    <div className="md:container md:mx-auto md:fixed md:top-0 md:left-0 md:right-0 md:border-b-2 font-merienda">
      <div className="md:flex md:justify-between bg-white py-2 hidden items-center w-full left-auto right-auto">
        <NavLink
          className="font-bold text-3xl text-[#2D357D] flex items-center"
          to="/"
        >
          <img src={Logo} className="h-16" alt="Logo" />
          <div className="font-merienda">{title}</div>
        </NavLink>
        <div className="font-bold text-2xl text-[#2D357D] flex">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </NavLink>
          <NavLink
            to="Courses"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            Courses
          </NavLink>
          <NavLink
            to="/FAQ"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            FAQ
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassName
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            Blog
          </NavLink>
          <div className="flex items-center">
            <button
              className="flex items-center mx-10"
              title={mode}
              onClick={handleMode}
            >
              {mode === "Lite Mode" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </>
              )}
            </button>
            {user ? (
              <>
                <NavLink to="/UserProfile">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile pic"
                      title={user?.displayName}
                      className="rounded-full w-12"
                    />
                  ) : (
                    <i className="fa-regular fa-circle-user"></i>
                  )}
                </NavLink>
                <button
                  className="border rounded-lg ml-4 px-2 py-1 hover:bg-red-500 hover:text-white hover:border-red-500"
                  title="Logout"
                  onClick={handleLogOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive ? activeClassName : notActiveClassName
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
                Login
              </NavLink>
            )}
          </div>
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
        <NavLink to="/Courses" className="px-3 py-1 text-[#2D357D]">
          Courses
        </NavLink>
        <NavLink to="/FAQ" className="px-3 py-1 text-[#2D357D]">
          FAQ
        </NavLink>
        <NavLink to="/Blog" className="px-3 py-1 text-[#2D357D]">
          Blog
        </NavLink>
        {user ? (
          <>
            <NavLink to="/UserProfile" className="px-3 py-1 text-[#2D357D]">
              {user?.displayName}
            </NavLink>
            <button
              className="ml-4 px-2 py-1 text-red-600"
              title="Logout"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/Login" className="px-3 py-1 text-[#2D357D]">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
