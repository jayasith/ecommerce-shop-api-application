import React from 'react'
import {MdCreditCard, MdLockOutline, MdDateRange } from "react-icons/md"
import "./styles/PaymentForms.css"

function AddCardForm() {
    return (
        <div className="cdFormout">
            <h1>Enter your card details</h1>
            <div className="textBox">
                <form className="cdForm">
                    <label   label>card number</label>
                    <br/>
                
                    <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" className="numberInput" required/>
                    <MdCreditCard className="cardIcon"/>               
                    <br/>
                    <label>expiration date</label>
                    <label className="cvc">cvc</label>
                    <br/>
                    <input type="text" placeholder="(MM/YY)" className="dateInput" required/>
                    <MdDateRange className="dateIcon" />                
                    <input type="text" placeholder="cvc" className="cvcInput" required />
                    <MdLockOutline className="lockIcon" />
                    <br/>
                    <button type="submit" onClick={console.log("onclick")} className="payBt">PAY</button>
                </form>
            </div>
        </div>
    )
}

export default AddCardForm
