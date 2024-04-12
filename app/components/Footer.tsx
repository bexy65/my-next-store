import React from "react";

const Footer = () => {
  return (
    <div className="footer-container flex flex-row w-full justify-around text-center items-center">
      <div className="flex flex-col">
        <h1>My Store</h1>
        <p>credits@:Naim Ertan</p>
      </div>
      <div className="flex flex-col">
        <a href="github.com" className="no-underline">
          Github
        </a>
        <a href="linkedin.com" className="no-underline">
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;
