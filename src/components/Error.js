import React from "react";
import ErrorPage from "../assets/ErrorPage.gif";

const Error = () => {
  return (
    <div className="container mx-auto md:mt-10">
      <div className="flex justify-center items-center">
        <img src={ErrorPage} alt="404 Error" className="" />
      </div>
    </div>
  );
};

export default Error;
