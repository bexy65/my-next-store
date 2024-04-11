import React from "react";
import ProductList from "../components/ProductList";

const Boots = async () => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="w-1/6 mx-4 bg-yellow-300">
        <li>Category1</li>
        <li>Category1</li>
        <li>Category1</li>
        <li>Category1</li>
      </div>
      <div className="w-5/6">
        <ProductList category="boots" />
      </div>
    </div>
  );
};

export default Boots;
