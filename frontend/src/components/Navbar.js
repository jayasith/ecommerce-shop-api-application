import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
