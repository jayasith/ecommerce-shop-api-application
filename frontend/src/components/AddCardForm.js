import React,{useState ,useContext} from 'react'
import {MdCreditCard, MdLockOutline, MdDateRange } from "react-icons/md"
import "./styles/PaymentForms.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "./contexts/CartContext";

function AddCardForm(props) {

    console.log(props.delivery)
const context = useContext(CartContext);


const {city,email,state,streetaddress} = props.delivery

const [cardno,setCardno]= useState("")
const [date,setDate]= useState("")
const [cvc,setCvc]= useState("")


const cardhandle = async(e) =>{
    e.preventDefault();
        const card={ cardno, date, cvc}
        

    try {
      const cardResponse = await fetch(
        `http://localhost:9090/rest/card/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(card),
        }
      );
      if (cardResponse.ok) {
        setCardno("");
        setDate("");
        setCvc("");
        toast.success("Your payment successful");
        const orderResponse = await fetch(
        `http://localhost:9090/rest/card/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(card),
        }
      );
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }

}

    return (
        <div className="cdFormout" onSubmit={(e)=>cardhandle(e)}>
            <h1>Enter your card details</h1>
            <div className="textBox">
                <form className="cdForm" >
                    <label   label>card number</label>
                    <br/>
                
                    <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx"  onChange={(e) => setCardno(e.target.value)} className="numberInput" required/>
                    <MdCreditCard className="cardIcon"/>               
                    <br/>
                    <label>expiration date</label>
                    <label className="cvc">cvc</label>
                    <br/>
                    <input type="text" placeholder="(MM/YY)"  onChange={(e) => setDate(e.target.value)} className="dateInput" required/>
                    <MdDateRange className="dateIcon" />                
                    <input type="text" placeholder="cvc"  onChange={(e) => setCvc(e.target.value)} className="cvcInput" required />
                    <MdLockOutline className="lockIcon" />
                    <br/>
                    <button type="submit" onClick={console.log("onclick")} className="payBt">PAY</button>
                </form>
            </div>
            <ToastContainer position="top-center" />
        </div>
    )
}

export default AddCardForm
