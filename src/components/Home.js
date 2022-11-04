import React from "react";
import HomeGif from "../assets/HomeGif.gif";

const Home = () => {
  return (
    <div className="container mx-auto md:mt-10">
      <div className="flex justify-center items-center">
        <div className="md:w-1/2 text-center">
          <p className="font-bold text-3xl">
            Starts Your Programming Journey Here
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={HomeGif} alt="Home Gif" />
        </div>
      </div>
    </div>
  );
};

export default Home;
