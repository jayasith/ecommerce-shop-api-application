import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

const Navbar = () => {
  const location = useLocation();
  // const cartIsOpen = useContext(CartContext);

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
                <Link
                  to="/products/cart"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaShoppingCart style={{ fontSize: "1.2rem" }} />
                  <p style={{ paddingLeft: ".6rem" }}>0</p>
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
    </header>
  );
};

export default Navbar;
