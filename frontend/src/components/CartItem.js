import React from "react";
import { FaTrash } from "react-icons/fa";
import products from "../data/productDetails";

const CartItem = ({ cart, removeProductFromCart }) => {
  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img className="cart-img" src={cart.product.imgurl} alt="" />
      </div>
      <div className="action-container">
        <p>
          {console.log(typeof cart.price)}
          {cart.quantity} x {cart.product.name} ={" LKR "}
          {cart.quantity * cart.product.price}
        </p>
        <button
          className="important buy-now"
          onClick={() => removeProductFromCart(cart.product.id)}
        >
          <FaTrash style={{ fontSize: "1rem" }} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
