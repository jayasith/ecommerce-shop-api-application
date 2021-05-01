import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <h4 className="shop-name">SHOP</h4>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/seller-register" className="important">
                Register as Seller
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
