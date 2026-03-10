import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Cart;