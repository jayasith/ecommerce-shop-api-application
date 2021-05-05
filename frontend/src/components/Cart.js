import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import "./styles/Cart.css";

const Cart = () => {
  const [className, setClassName] = useState("");

  return (
    <div className={`cart-container ${className}`}>
      <h3>Added Items</h3>
      <FaTimes
        style={{ position: "absolute", top: "2%", right: "5%" }}
        //   onClick={() => setClassName("close")}
      />
    </div>
  );
};

export default Cart;
