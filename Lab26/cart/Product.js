import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";

function Product() {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  const product = {
    id: 1,
    name: "Laptop",
    price: 50000
  };

  return (
    <div>

      <h2>{product.name}</h2>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>

      <h3>Items in Cart: {cart.length}</h3>

    </div>
  );
}

export default Product;