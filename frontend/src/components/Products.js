import React, { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import productDetails from "../data/productDetails";
import ProductCard from "./ProductCard";

import "./styles/Product.css";
import CartContext from "./contexts/CartContext";

const Products = () => {
  let [products, setProducts] = useState(productDetails);
  const [searchValue, setSearchValue] = useState("");

  const context = useContext(CartContext);

  const handleAddProduct = (product) => {
    context.addProductToCart(product);
  };

  document.title = "Products";

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const selectCategory = (e) => {
    e.preventDefault();
    if (e.target.value === "all") {
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
      <ToastContainer position="top-center" autoClose={2000} />
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
            return (
              <ProductCard
                product={product}
                key={product.id}
                addProductToCart={handleAddProduct}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
