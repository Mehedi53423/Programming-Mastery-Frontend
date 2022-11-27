import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import LoginGif from "../assets/Login.gif";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { providerLogin, signIn, forgetPassword } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");

  // Google Login
  const handleGoogleSignIn = () => {
    providerLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // Github Login
  const handleGithubSignIn = () => {
    providerLogin(githubAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // Email & Password Login
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
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setUserEmail(email);
  };

  const handleForgetPassword = () => {
    forgetPassword(userEmail)
      .then(() => {
        toast.success(
          `Password Reset Email Was Sent To Your Email Address, ${userEmail}`
        );
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="container mx-auto md:mt-36 mt-10 font-messiri">
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
                onBlur={handleEmailBlur}
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
            <div className="w-4/6 md:text-right text-center text-lg mt-3 md:pr-10">
              <p>
                Forgot Password?{" "}
                <Link
                  onClick={handleForgetPassword}
                  className="text-[#2D357D] hover:text-indigo-600"
                >
                  Reset
                </Link>
              </p>
            </div>
            <button
              className="border pt-2 pb-1 px-4 rounded-full my-5 bg-[#2D357D] text-white hover:bg-indigo-600"
              type="submit"
            >
              <i class="fa-solid fa-right-to-bracket pr-1"></i>
              Login
            </button>
            <div href="/Signup" className="font-bold text-lg hidden md:block">
              Don't Have An Account?{" "}
              <a
                href="/Signup"
                className="text-[#2D357D] hover:text-indigo-600"
              >
                Signup
              </a>
            </div>
            <div className="font-bold text-lg md:hidden block">
              Don't Have An Account?{" "}
              <NavLink
                to="/Signup"
                className="text-[#2D357D] hover:text-indigo-600"
              >
                Signup
              </NavLink>
            </div>
          </form>
          <div className="flex justify-center">
            <div className="border-t-2 w-full mt-3"></div>
            <p className="font-semibold text-lg px-2 text-gray-400">Or</p>
            <div className="border-t-2 w-full mt-3"></div>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={handleGoogleSignIn}
              className="border pt-2 pb-1 px-4 mt-5 rounded-full bg-[#2D357D] text-white hover:bg-indigo-600 w-fit"
            >
              <i className="fa-brands fa-google mr-2"></i>
              Login by Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="border pt-2 pb-1 px-4 mt-5 rounded-full bg-[#2D357D] text-white hover:bg-indigo-600 w-fit"
            >
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
