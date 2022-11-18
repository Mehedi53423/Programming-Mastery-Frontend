import React from "react";
import Terms from "../assets/Terms.gif";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto md:mt-36 mt-10 font-merienda">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:flex hidden justify-center">
          <img src={Terms} alt="Terms and Conditions" />
        </div>
        <div className="md:w-1/2 py-24 text-center">
          <h1 className="font-bold text-3xl">Terms & Conditions</h1>
          <p className="text-justify my-8 mx-2 text-lg">
            You can only use Programming Mastery for lawful purposes. You're
            responsible for all thing on our platform. You should keep the
            courses and other content you learn are in line with our Trust &
            Safety Guidelines and the law, and respect the intellectual property
            rights of others.
          </p>
          <p className="font-semibold text-lg">
            Go To{" "}
            <Link to="/Signup" className="text-[#2D357D] hover:text-indigo-600">
              Signup
            </Link>{" "}
            Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
