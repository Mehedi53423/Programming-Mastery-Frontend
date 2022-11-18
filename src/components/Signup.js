import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SignupGif from "../assets/Signup.gif";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="md:flex items-center">
        <div className="md:w-1/2 py-24 md:drop-shadow-2xl">
          <h1 className="text-center font-bold text-2xl">Signup</h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col p-5 items-center font-bold mt-4"
          >
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-solid fa-user border p-3 rounded-l-lg"></i>
              <input
                type="text"
                className="border-l-0 border-slate-200 py-2.5 rounded-r-lg outline-none md:w-1/2 focus:ring-0 focus:border-slate-200"
                placeholder="Full Name"
                name="name"
                required
              />
            </label>
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-solid fa-envelope border p-3 rounded-l-lg"></i>
              <input
                type="email"
                className="border-l-0 border-slate-200 my-4 py-2.5 rounded-r-lg outline-none md:w-1/2 focus:ring-0 focus:border-slate-200"
                placeholder="Email"
                name="email"
                required
              />
            </label>
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-solid fa-image border p-3 mb-4 rounded-l-lg"></i>
              <input
                type="text"
                className="border-l-0 border-slate-200 mb-4 py-2.5 rounded-r-lg outline-none md:w-1/2 focus:ring-0 focus:border-slate-200"
                placeholder="Photo URL"
                name="photoURL"
              />
            </label>
            <label className="flex items-center justify-center text-xl w-full">
              <i className="fa-sharp fa-solid fa-lock border p-3 rounded-l-lg"></i>
              <input
                type="password"
                className="border-l-0 border-slate-200 py-2.5 rounded-r-lg md:w-1/2 focus:ring-0 focus:border-slate-200 outline-none"
                placeholder="Password"
                name="password"
                required
              />
            </label>
            <button
              type="submit"
              className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600"
            >
              <i className="fa-solid fa-user-plus pr-1"></i>
              Signup
            </button>
            <div className="font-bold text-lg hidden md:block">
              Already Have An Account?{" "}
              <a href="/Login" className="text-[#2D357D] hover:text-indigo-600">
                Login
              </a>
            </div>
            <div className="font-bold text-lg md:hidden block">
              Already Have An Account?{" "}
              <NavLink
                to="/Login"
                className="text-[#2D357D] hover:text-indigo-600"
              >
                Login
              </NavLink>
            </div>
          </form>
          <div className="flex justify-center">
            <div className="border-t-2 w-full mt-3"></div>
            <p className="font-semibold text-lg px-2 text-gray-400">Or</p>
            <div className="border-t-2 w-full mt-3"></div>
          </div>
          <div className="flex flex-col items-center">
            <button className="border pt-1 pb-2 px-4 mt-5 rounded-full bg-[#2D357D] text-white hover:bg-indigo-600 w-fit">
              <i className="fa-brands fa-google mr-2"></i>
              Signup by Google
            </button>
            <button className="border pt-1 pb-2 px-4 mt-5 rounded-full bg-[#2D357D] text-white hover:bg-indigo-600 w-fit">
              <i className="fa-brands fa-github mr-2"></i>
              Signup by Github
            </button>
          </div>
          <div>
            {error ? (
              <h1 className="text-lg text-red-700 text-center m-4 p-2 border border-red-700 rounded-lg bg-red-300">
                {error}
              </h1>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="md:w-1/2 md:flex hidden justify-center">
          <img src={SignupGif} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
