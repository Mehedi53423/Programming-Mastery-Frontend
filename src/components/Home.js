import React from "react";
import HomeGif from "../assets/HomeGif.gif";

const Home = () => {
  return (
    <div className="container mx-auto md:mt-36 mt-10 font-messiri">
      <div className="md:flex justify-center items-center">
        <div className="md:w-1/2 text-center">
          <p className="font-bold text-3xl">
            Start Your Programming Journey From Here
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
