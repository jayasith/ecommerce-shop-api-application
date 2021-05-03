import React from "react";
import { FaCartPlus } from "react-icons/fa";

import "./styles/Product.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={product.imgurl} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="action-container">
        <p className="price">{product.price}.00</p>
        <button className="important buy-now">
          <FaCartPlus style={{ fontSize: "1rem" }} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
