import { useEffect, useState } from 'react';
import OrderItem from './OrderItem'
import "./styles/Order.css";

const Order = () => {

 const [items , setItems] = useState(null);  
 
 
 useEffect(()=>{
     fetch('http://localhost:8000/orders')
     .then(res => {
         return res.json();
     })
     .then( data =>{
        setItems(data);});

 },[]);


    return ( 
<div className="Order">

  
 
  {items && <OrderItem items={items} title ="List"/>}
   
  
</div> ); 
}
    
 
export default Order;