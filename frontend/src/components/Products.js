import React, { useState } from "react";
import productDetails from "../data/productDetails";
import ProductCard from "./ProductCard";

import "./styles/Product.css";

const Products = () => {
  const [products, setProducts] = useState(productDetails);
  return (
    <div className="product-page-container">
      <form>
        <input type="text" placeholder="Search here.." />
        <div className="category">
          <button>All</button>
          <button>Electronics</button>
          <button>Fashion</button>
          <button>Furniture</button>
        </div>
      </form>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
