import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SignupGif from "../assets/Signup.gif";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

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
        navigate("/");
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please Verify Your Email Address");
      })
      .catch((e) => {
        toast.error(e.message);
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

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div className="container mx-auto md:mt-36 mt-10 font-merienda">
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
            <div class="md:flex items-center mt-5 justify-center text-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2D357D] rounded focus:ring-0 focus:ring-inherit"
                onClick={handleAccepted}
              />
              <label for="link-checkbox" class="ml-2 text-lg font-bold">
                I Agree With The{" "}
                <a
                  href="/TermsAndConditions"
                  className="text-[#2D357D] hover:text-indigo-600"
                >
                  Terms & Conditions
                </a>
                .
              </label>
            </div>
            {accepted ? (
              <button
                type="submit"
                className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600"
              >
                <i className="fa-solid fa-user-plus pr-1"></i>
                Signup
              </button>
            ) : (
              <button
                className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2d357d8c] text-white"
                disabled
              >
                <i className="fa-solid fa-user-plus pr-1"></i>
                Signup
              </button>
            )}
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
        </div>
        <div className="md:w-1/2 md:flex hidden justify-center">
          <img src={SignupGif} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
