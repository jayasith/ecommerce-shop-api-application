import React, { useState, useContext } from "react";
import { MdCreditCard, MdLockOutline, MdDateRange } from "react-icons/md";
import "./styles/PaymentForms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./contexts/Context";

function AddCardForm(props) {
  
  const context = useContext(Context);
  const products = [...context.products]
  console.log(props.delivery);
 console.log(products);


  const date = new Date().getTime();
  console.log(date);
  const { city, state, streetaddress } = props.delivery;
  const id = context.userAuth;

  const [cardno, setCardno] = useState("");
  const [exdate, setExdate] = useState("");
  const [cvc, setCvc] = useState("");

  const cardhandle = async (e) => {
    e.preventDefault();
    const card = { cardno, exdate, cvc };
    const order = { id, date, city, products, state, streetaddress}
    console.log(order);
        console.log(card);
    try {
      const cardResponse = await fetch(`http://localhost:9090/rest/order/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      
      if (cardResponse.ok) {
        
        setCardno("");
        setExdate("");
        setCvc("");
        toast.success("Your payment successful");
        const orderResponse = await fetch(`http://localhost:9090/rest/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });
        
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="cdFormout" onSubmit={(e) => cardhandle(e)}>
      <h1>Enter your card details</h1>
      <div className="textBox">
        <form className="cdForm">
          <label label>card number</label>
          <br />

          <input
            type="text"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            onChange={(e) => setCardno(e.target.value)}
            className="numberInput"
            required
          />
          <MdCreditCard className="cardIcon" />
          <br />
          <label>expiration date</label>
          <label className="cvc">cvc</label>
          <br />
          <input
            type="text"
            placeholder="(MM/YY)"
            onChange={(e) => setExdate(e.target.value)}
            className="dateInput"
            required
          />
          <MdDateRange className="dateIcon" />
          <input
            type="text"
            placeholder="cvc"
            onChange={(e) => setCvc(e.target.value)}
            className="cvcInput"
            required
          />
          <MdLockOutline className="lockIcon" />
          <br />
          <button
            type="submit"
            onClick={console.log("onclick")}
            className="payBt"
          >
            PAY
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AddCardForm;
