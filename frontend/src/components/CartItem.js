import React from "react";
import { FaTrash } from "react-icons/fa";
import products from "../data/productDetails";

const CartItem = () => {
  return (
    <div>
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <div className="action-container">
        {/* <p>{products.name}</p> */}
        <button className="important buy-now">
          <FaTrash style={{ fontSize: "1rem" }} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
