"use client";
import React, { useState, ReactNode } from "react";
import { FaBars, FaUser, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface Props {
  children?: ReactNode;
}

const Navbar = ({ children, ...props }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="flex flex-row items-center justify-between">
          <button className="ml-4">
            <FaUser />
          </button>
          <button
            className="cart-container ml-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
      <div className={`cart-modal ${isHovered ? "open" : "close"}`}>
        <div>
          <p>name</p>
          <img src="" alt="some image" />
          <p>price</p>
        </div>
      </div>
      <div
        className={`navbar-container flex flex-col md:flex-row md:hidden text-start ${
          isExpanded ? "expand" : "collapse"
        }`}
      >
        <button onClick={sidebarHandler} className="self-end text-lg p-2">
          <FaXmark />
        </button>
        {children}
      </div>
    </>
  );
};

export default Navbar;
