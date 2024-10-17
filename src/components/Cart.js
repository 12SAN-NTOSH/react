import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
