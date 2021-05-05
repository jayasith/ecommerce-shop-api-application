import { FaTimes } from "react-icons/fa";

import "./styles/Cart.css";

const Cart = ({ isToggle, setIsToggle }) => {
  return (
    <div className={`cart-container ${isToggle ? "open" : "close"}`}>
      <h3>Added Items</h3>
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
    </div>
  );
};

export default Cart;
