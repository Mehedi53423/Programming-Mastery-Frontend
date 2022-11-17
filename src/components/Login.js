import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginGif from "../assets/Login.gif";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { providerLogin, signIn } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    providerLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:flex hidden justify-center">
          <img src={LoginGif} alt="Login" />
        </div>
        <div className="md:w-1/2 py-24 md:drop-shadow-2xl">
          <h1 className="text-center font-bold text-2xl">Login</h1>
          <form
            action=""
            className="flex flex-col p-5 items-center font-bold"
            onSubmit={handleSubmit}
          >
            <label className="flex items-center justify-center text-xl w-full">
              <i class="fa-solid fa-envelope border p-3 rounded-l-lg"></i>
              <input
                type="email"
                className="border-l-0 border-slate-200 my-4 py-2.5 rounded-r-lg outline-none md:w-1/2 focus:ring-0 focus:border-slate-200"
                placeholder="Email"
                name="email"
                required
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
            <div className="w-4/6 pr-10 text-right text-lg mt-3">
              <a href="/">Forgot Password?</a>
            </div>
            <button
              className="border pt-1 pb-2 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600"
              type="submit"
            >
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
          <div className="flex justify-center">
            <div className="border-t-2 w-full mt-3"></div>
            <p className="font-semibold text-lg px-2 text-gray-400">Or</p>
            <div className="border-t-2 w-full mt-3"></div>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={handleGoogleSignIn}
              className="border pt-1 pb-2 px-4 mt-5 rounded-full bg-[#2D357D] text-white hover:bg-indigo-600 w-fit"
            >
              <i className="fa-brands fa-google mr-2"></i>
              Login by Google
            </button>
            <button className="border pt-1 pb-2 px-4 mt-5 rounded-full bg-[#2D357D] text-white hover:bg-indigo-600 w-fit">
              <i className="fa-brands fa-github mr-2"></i>
              Login by Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
