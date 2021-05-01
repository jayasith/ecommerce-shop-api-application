import React, { useState } from "react";
import productDetails from "../data/productDetails";
import ProductCard from "./ProductCard";

import "./styles/Product.css";

const Products = () => {
  const [products, setProducts] = useState(productDetails);
  const [searchValue, setsearchValue] = useState("S");

  const handleSearchChange = (e) => {
    setsearchValue(e.target.value);
  };

  return (
    <div className="product-page-container">
      <form>
        <input
          type="text"
          placeholder="Search here.."
          value={searchValue}
          onChange={(e) => handleSearchChange(e)}
        />
        <div className="category">
          <button>All</button>
          <button>Electronics</button>
          <button>Fashion</button>
          <button>Furniture</button>
        </div>
      </form>
      <div className="products-container">
        {products
          .filter((product) => {
            return product.name
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
          .map((product) => {
            return <ProductCard product={product} />;
          })}
      </div>
    </div>
  );
};

export default Products;
