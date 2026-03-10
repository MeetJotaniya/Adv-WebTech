import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Product() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Product List</h2>

      <button onClick={() => addToCart("Laptop")}>
        Add Laptop
      </button>

      <button onClick={() => addToCart("Mobile")}>
        Add Mobile
      </button>
    </div>
  );
}

export default Product;