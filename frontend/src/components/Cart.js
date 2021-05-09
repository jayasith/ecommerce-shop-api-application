import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import "./styles/Cart.css";

const Cart = ({
  isToggle,
  setIsToggle,
  carts,
  removeProductFromCart,
  clearCart,
}) => {
  return (
    <div className={`cart-container ${isToggle ? "open" : "close"}`}>
      <h3>Your Cart</h3>
      <p
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {carts.length === 0 ? "No items in the cart" : ""}
      </p>
      <FaTimes
        style={{
          position: "absolute",
          top: "3%",
          right: "5%",
          cursor: "pointer",
          fontSize: "1.2rem",
        }}
        onClick={() => (isToggle ? setIsToggle(false) : setIsToggle(true))}
      />
      <div className="cart-items-container">
        {carts.map((cart) => {
          return (
            <CartItem
              cart={cart}
              removeProductFromCart={removeProductFromCart}
            />
          );
        })}
      </div>
      {carts.length !== 0 ? (
        <button className="important clear-all" onClick={clearCart}>
          Clear Cart
        </button>
      ) : (
        ""
      )}
      {carts.length !== 0 ? (
        <Link to="/payment">
          <button
            className="important clear-all"
            onClick={() => setIsToggle(false)}
          >
            Proceed to Checkout
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
