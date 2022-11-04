import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="border-t-2 mt-5 pt-5 md:absolute md:bottom-5 container left-auto right-auto">
        <div className="md:flex justify-between font-bold text-lg">
          <p className="pl-5 hidden md:block">
            &#169; 2022 Programming Mastery&#8482;. All Rights Reserved.
          </p>
          <p className="pl-5 md:hidden text-center pb-5">
            &#169; 2022 Programming Mastery&#8482;. <br />
            All Rights Reserved.
          </p>
          <div className="md:block hidden">
            <a href="https://www.facebook.com" title="Facebook">
              <i className="fa-brands fa-facebook fa-xl px-5 hover:text-blue-400"></i>
            </a>
            <a href="https://www.twitter.com" title="Twitter">
              <i className="fa-brands fa-twitter fa-xl px-5 hover:text-blue-500"></i>
            </a>
            <a href="https://www.github.com" title="Github">
              <i className="fa-brands fa-github fa-xl px-5 hover:text-purple-800"></i>
            </a>
            <a href="https://www.gitlab.com" title="Gitlab">
              <i className="fa-brands fa-gitlab fa-xl px-5 hover:text-orange-400"></i>
            </a>
            <a href="https://www.bitbucket.com" title="Bitbucket">
              <i className="fa-brands fa-bitbucket fa-xl px-5 hover:text-blue-600"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
