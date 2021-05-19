import React, { useState, useContext } from "react";
import { MdCreditCard, MdLockOutline, MdDateRange } from "react-icons/md";
import "./styles/PaymentForms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./contexts/Context";


function AddCardForm(props) {
  
  const context = useContext(Context);
  const products = [...context.products]
  const buyerid = context.userAuth
  var email
  
  const getEmail = async()=>{
   
      const respons = await fetch(
        `http://localhost:9090/rest/email/${buyerid}/`  
      )
       email = await respons.text();
    }
 
    getEmail();

  const date = new Date().getTime();
  console.log(date);
  const { city, state, streetaddress } = props.delivery;

  const [cardno, setCardno] = useState("");
  const [exdate, setExdate] = useState("");
  const [cvc, setCvc] = useState("");

  const paymentconfirm = (serviceID, templateId, variables) => {
    toast.success("Your payment successful");
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

  const paymentemail = () => {
        const templateId = 'template_3e10xcd';
        const serviceID = 'service_f5upd53';
        console.log(email);
        paymentconfirm(serviceID, templateId, { to_name:" ", from_name: "shop.com", reply_to:email})
      
    }

  const cardhandle = async (e) => {
    e.preventDefault();
    paymentemail();
    const card = { cardno, exdate, cvc };
    const order = { buyerid, date, city, products, state, streetaddress}
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
        

        const orderResponse = await fetch(`http://localhost:9090/rest/card`, {
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
