import React, { useContext } from "react";
import "./styles/Payment.css";
import Context from "./contexts/Context";

function Pricedetails(){

    let item = 0;
    let subtotal = 0;
    const context = useContext(Context);
    console.log(context);
    return(
        <div>
            <form className='paymentform'>
            <h2 className ="os" >Order summery</h2>
            {context.carts.map(id => {
                return(<div>
                    <img className="productImg" src={id.product.imgurl} alt="img"/> 
                    <label className="peoductName">{id.product.name} X {id.quantity}</label>
                <label className="subPrice" >{id.product.itemprice}</label>
                <div className="cal">{item+=id.quantity }
                {subtotal+=(id.product.itemprice*id.quantity)}</div> </div>)             
                })}
                <hr/>
                <div  className ="fDiv">  
                <label className="sub">Subtotal(SLR)</label>
                <label className="subPrice">{subtotal}</label>
                <br/>                
                <label>Shipping(SLR)</label>
                <label className="subPrice">1000</label>
                <br/>
                <label>Items</label>
                <label className="subPrice">{item}</label>
                </div>
                <hr/>
                <br/>
                <label className="total">TOTAL(SLR)</label>
                <label className="totPrice">{subtotal + 1000}</label>
      </form>
    </div>
  );
}

export default Pricedetails;
