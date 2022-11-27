import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const CheckOut = () => {
  const course = useLoaderData();
  const { name, logo } = course;

  const handleCheckOut = () => {
    toast.success(`Successfully Enrolled In The ${name} Course`);
  };
  return (
    <div className="container mx-auto md:mt-36 mt-10 font-messiri">
      <h1 className="text-center font-bold text-3xl">Check Out Course</h1>
      <div className="rounded-lg md:w-1/2 mx-auto p-2 md:p-10 mt-5 md:mt-10">
        <div className="flex justify-center p-2">
          <img src={logo} alt="Logo" className="w-28 h-28" />
        </div>
        <div className="text-center mt-2 mb-10">
          <h1 className="font-bold text-xl my-2">Course Name: {name}</h1>
          <p className="font-bold text-xl">Price: &#2547; 500</p>
        </div>
        <div className="text-center mb-6 md:mb-10">
          <Link
            to="/"
            className="border px-3 py-1 font-semibold text-lg rounded-lg hover:text-white hover:bg-indigo-500 m-2"
            onClick={handleCheckOut}
          >
            Check Out
          </Link>
          <Link
            to="/Courses"
            className="border px-3 py-1 font-semibold text-lg rounded-lg hover:text-white hover:bg-indigo-500 m-2"
          >
            Go To Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
