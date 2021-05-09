import React, { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ProductCard from "./ProductCard";

import "./styles/Product.css";
import CartContext from "./contexts/CartContext";

const Products = () => {
  let [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const context = useContext(CartContext);

  const handleAddProduct = (product) => {
    context.addProductToCart(product);
  };

  const getProducts = async () => {
    const response = await fetch("http://localhost:9090/rest/products");
    const data = await response.json();
    context.addProducts(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  document.title = "Products";

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const selectCategory = (e) => {
    e.preventDefault();
    if (e.target.value === "all") {
      setProducts(context.products);
    } else {
      products = context.products;
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
          <button onClick={(e) => selectCategory(e)} value="all" autoFocus>
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
