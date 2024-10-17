import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
