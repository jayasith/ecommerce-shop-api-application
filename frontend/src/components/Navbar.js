import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = () => {
  const location = useLocation();
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header>
      <div className="nav-container">
        <h4 className="shop-name">SHOP</h4>
        <nav>
          <ul>
            <li>
              {location.pathname === "/products" ||
              location.pathname === "/orders" ? (
                <Link to="/products">Products</Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </li>
            <li>
              {location.pathname === "/products" ||
              location.pathname === "/orders" ? (
                <Link to="/orders">Orders</Link>
              ) : (
                ""
              )}
            </li>
            {location.pathname === "/products" && (
              <li>
                <Link style={{ display: "flex", alignItems: "center" }}>
                  <FaShoppingCart
                    style={{ fontSize: "1.2rem" }}
                    onClick={() => {
                      isToggle ? setIsToggle(false) : setIsToggle(true);
                      console.log(isToggle);
                    }}
                  />
                  <p
                    style={{
                      marginLeft: ".6rem",
                      fontSize: "0.8rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "50%",
                      background: "#ef233c",
                      color: "white",
                    }}
                  >
                    0
                  </p>
                </Link>
              </li>
            )}
            <li>
              {location.pathname === "/products" ||
              location.pathname === "/orders" ? (
                <Link to="/" className="important">
                  Logout
                </Link>
              ) : (
                <Link to="/seller-register" className="important">
                  Register as Seller
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Cart isToggle={isToggle} setIsToggle={setIsToggle} />
    </header>
  );
};

export default Navbar;
