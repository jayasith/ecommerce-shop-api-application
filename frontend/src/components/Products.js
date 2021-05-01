import React, { useState } from "react";
import productDetails from "../data/productDetails";
import ProductCard from "./ProductCard";

import "./styles/Product.css";

const Products = () => {
  let [products, setProducts] = useState(productDetails);
  const [searchValue, setSearchValue] = useState("");

  document.title = "Products";

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const selectCategory = (e) => {
    e.preventDefault();
    if (e.target.value === "all") {
      console.log("all");
      setProducts(productDetails);
    } else {
      products = productDetails;
      setProducts(
        products.filter((product) => {
          return product.category === e.target.value;
        })
      );
    }
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
          <button onClick={(e) => selectCategory(e)} value="all">
            All
          </button>
          <button onClick={(e) => selectCategory(e)} value="Electronics">
            Electronics
          </button>
          <button onClick={(e) => selectCategory(e)} value="Fashion">
            Fashion
          </button>
          <button onClick={(e) => selectCategory(e)} value="Furniture">
            Furniture
          </button>
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
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default Products;
