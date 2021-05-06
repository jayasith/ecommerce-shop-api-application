import React, { useContext, useState }from 'react'
import "./styles/Payment.css";
import  Cardimg from "../assets/credit_card_logo.png";
import Ispimg from  "../assets/isp_logos.png";
import Popup from "./Popup.js";
import Paymentsummery from "./PaymentSummery.js"
import CartContext from "./contexts/CartContext";


function PayMethod(){

    const context = useContext(CartContext);

    const [Bttpopup,setBtpopup] = useState(false);
    const [CardPopup,setCardpopup] = useState(false)

const cardbutton = () =>  {
        setBtpopup(true); 
        setCardpopup(true);
        console.log(context)
        }
const noButton = () => {
    setBtpopup(true); 
    setCardpopup(false);
}


    return(
        
        <div  className="payform">  
            <h1 className="payTitle">Select a payment method</h1>
           

            
            <hr/>            
            <label className="payOpp">Credit or Debit card</label>
            <img className="cardImg" src={Cardimg}  alt="img"/>
            <br/>
            <button className="cdBt" onClick={cardbutton} > Add a card</button>
            <br/>
            <hr/>
            <label className="payOpp">Mobile number</label>
            <img className="ispImg" src={Ispimg}  alt="img"/>
            <br/>
            <button className="pnBt" onClick={noButton}>Add a phone number</button>
            <Paymentsummery />
            <Popup trigger={Bttpopup} setTrigger={setBtpopup} setCard={CardPopup}/> 

        </div>
    )
}

export default PayMethod;