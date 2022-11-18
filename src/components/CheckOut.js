import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { name, logo } = course;
  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-28 h-28" />
      </div>
      <h1 className="font-bold text-xl text-center">{name}</h1>
    </div>
  );
};

export default CheckOut;
