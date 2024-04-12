import React from "react";

const Cart = async () => {
  return (
    <div className="cart-container flex flex-col p-4 justify-center text-center w-full">
      <h1>Cart</h1>
      <div className="flex flex-row border-2 border-black p-2">
        <div className="cart-items-container flex flex-col w-1/2 justify-center">
          <h1>My item1</h1>
          <p>price</p>
        </div>
        <div className="cart-checkout-container flex flex-col w-1/2">
          <h1>My item1</h1>
          <p>price</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
