import React from "react";
import PocketBase from "pocketbase";

const Cart = async () => {
  return (
    <div className="flex flex-col p-4 justify-center text-center w-full md:w-4/5">
      <h1>Cart</h1>
      <div className="flex flex-row">
        <div className="cart-items-container flex flex-col w-1/2">
          <h1>My item1</h1>
          <img src="" alt="myimg" />
          <p>price</p>
        </div>
        <div className="cart-checkout-container flex flex-col w-1/2"></div>
      </div>
    </div>
  );
};

export default Cart;
