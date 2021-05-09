import React, { useContext } from "react";
import "./styles/Payment.css";
import Context from "./contexts/Context";

function Pricedetails() {
  const context = useContext(Context);
  console.log(context);
  return (
    <div>
      <form className="paymentform">
        <h2 className="os">Order summery</h2>
        {context.carts.map((id) => {
          return (
            <div>
              <p>{id.product.name}</p>
              <p>{id.product.price}</p>
            </div>
          );
        })}
        <hr />
        <div className="fDiv">
          <label className="sub">Subtotal(SLR)</label>
          <label className="subPrice">132</label>
          <br />
          <label>Shipping(SLR)</label>
          <label className="subPrice">10</label>
          <br />
          <label>Items</label>
          <label className="subPrice">1</label>
        </div>
        <hr />
        <br />
        <label className="total">TOTAL(SLR)</label>
        <label className="totPrice">22</label>
      </form>
    </div>
  );
}

export default Pricedetails;
