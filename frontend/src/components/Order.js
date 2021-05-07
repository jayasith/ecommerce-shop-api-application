import { useEffect, useState } from 'react';

import "./styles/Order.css";
import "./styles/Popup.css"
const Order = ({orders,id}) => {

// const [items , setItems] = useState(null);  
const order = orders.filter((order)=> id !== order.id);
return ( 
<div className="Order">

{
    <div className="item-list" key={order.id}>
    <h1 style={{fontSize:"25px",float:"left",fontFamily: "Quicksand"}}>Order ID: 0111 {order.id}</h1><br />
    
    <br /><h1 style={{fontSize:"25px",float:"left",fontFamily: "Quicksand"}}>Address : {order.address}</h1><br />
    
    <br /><h1 style={{fontSize:"25px",float:"left",fontFamily: "Quicksand"}}>Date :{order.date} </h1>
    

        <div className="item" >   
            <div className="text-content">
                    <h1 style={{fontSize:"20px"}}>{order.name}</h1>
                    <p >{order.description}</p>
                    <p> </p>                   
                    <p >Price : {order.price}</p>
                    <p >quantity : {order.quantity}</p> 
            </div>
                <img src={order.mgurl} alt="picture"/>
            </div> 
            <div className="status" ><h4 >Status : {order.status}</h4></div>
    </div>}
    </div>
    ); 
}
    
 
export default Order;