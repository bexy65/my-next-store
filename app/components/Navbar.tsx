"use client";
import React, { useState } from "react";
import { FaBars, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sidebarHandler = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };
  return (
    <>
      <div className="header-container flex flex-row p-2 justify-between items-center md:rounded-2xl md:m-4">
        <button onClick={sidebarHandler} className="md:hidden">
          <FaBars />
        </button>
        <button>
          <a href="/">Logo</a>
        </button>
        <div className="hidden md:flex flex-row">{children}</div>
        <div className="flex flex-row items-center justify-around w-1/5">
          <button>
            <FaUser />
          </button>
          <button>
            <FaShoppingCart />
          </button>
        </div>
      </div>
      <div
        className={`navbar-container flex flex-col md:flex-row md:hidden text-start ${
          isExpanded ? "expand" : "collapse"
        }`}
      >
        <button onClick={sidebarHandler} className="text-end p-2">
          X
        </button>
        {children}
      </div>
    </>
  );
};

export default Navbar;
