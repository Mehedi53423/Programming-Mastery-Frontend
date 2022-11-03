import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto border-t-2 mt-5 pt-5">
      <div className="flex justify-between font-bold text-lg">
        <h1>&#169; 2022 Programming Mastery&#8482;. All Rights Reserved.</h1>
        <div className="">
          <a href="https://www.facebook.com">
            <i className="fa-brands fa-facebook fa-xl px-5 hover:text-blue-400"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-twitter fa-xl px-5 hover:text-blue-500"></i>
          </a>
          <a href="https://www.github.com">
            <i className="fa-brands fa-github fa-xl px-5 hover:text-purple-800"></i>
          </a>
          <a href="https://www.gitlab.com">
            <i className="fa-brands fa-gitlab fa-xl px-5 hover:text-orange-400"></i>
          </a>
          <a href="https://www.bitbucket.com">
            <i className="fa-brands fa-bitbucket fa-xl px-5 hover:text-blue-600"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
