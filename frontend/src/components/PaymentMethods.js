import React, { useState } from "react";
import "./styles/Payment.css";
import Cardimg from "../assets/credit_card_logo.png";
import Ispimg from "../assets/isp_logos.png";
import Popup from "./Popup.js";
import Paymentsummery from "./PaymentSummery.js";

function PayMethod(props) {
  console.log(props);
  console.log(props.deliveryDetails);

  const [Bttpopup, setBtpopup] = useState(false);
  const [CardPopup, setCardpopup] = useState(false);

  const cardbutton = () => {
    setBtpopup(true);
    setCardpopup(true);
  };
  const noButton = () => {
    setBtpopup(true);
    setCardpopup(false);
  };

  return (
    <div className="payform">
      <h1 className="payTitle">Select a payment method</h1>
      <hr />
      <label className="payOpp">Credit or Debit card</label>
      <img className="cardImg" src={Cardimg} alt="img" />
      <br />
      <button className="cdBt" onClick={cardbutton}>
        {" "}
        Add a card
      </button>
      <br />
      <hr />
      <label className="payOpp">Mobile number</label>
      <img className="ispImg" src={Ispimg} alt="img" />
      <br />
      <button className="pnBt" onClick={noButton}>
        Add a phone number
      </button>
      <Paymentsummery />
      <Popup
        delivery={props.deliveryDetails}
        trigger={Bttpopup}
        setTrigger={setBtpopup}
        setCard={CardPopup}
      />
    </div>
  );
}

export default PayMethod;
