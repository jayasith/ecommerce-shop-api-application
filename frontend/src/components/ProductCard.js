import React from "react";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";

import "./styles/Product.css";

const ProductCard = ({ product, addProductToCart }) => {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={product.imgurl} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="action-container">
        <p className="price" id="price">
          LKR {product.price}
        </p>
        <button
          className="important buy-now"
          onClick={() => {
            addProductToCart({ ...product });
            toast.success(`${product.name} added to cart`);
          }}
        >
          <FaCartPlus style={{ fontSize: "1rem" }} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
