import React from "react";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const Name = location.state.name;
  const Logo = location.state.logo;
  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="flex justify-center">
        <img src={Logo} alt="Logo" className="w-28 h-28" />
      </div>
      <h1 className="font-bold text-xl text-center">{Name}</h1>
    </div>
  );
};

export default CheckOut;
