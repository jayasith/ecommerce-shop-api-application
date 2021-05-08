import { Link } from "react-router-dom";
import "./styles/Order.css";
import { useEffect, useState } from 'react';
import Order from "./Order";
import {Button,Modal} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";





const OrderList = () => {

    const [orders , setOrders] = useState(null);  
  //  const [isClicked , setIsClicked] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





    useEffect(()=>{
        fetch('http://localhost:8000/orders')
        .then(res => {
            return res.json();
        })
        .then( data =>{
            console.log(data);
            setOrders(data);}
            );

    },[]);


    

    return (  
    <div className="orderList">
        <h1 style={{textAlign:"center",padding:"20px"}}>User's Orders</h1>  
        <table className="table">
            <thead>
                <th>Address</th>
                <th>Order Id</th>
                <th> Order Status</th>
                <th> Seller</th>
                <th></th>
            </thead>
            {orders &&
            <tbody>
                {orders.map((order)=>(
                
                <tr className="rw"  key={order.id}  > 
                    <td>{order.location}</td>
                    <td> {order.id}</td>
                    <td>{order.status}</td>
                    <td> {order.sellerId}</td>  
                    <td><button className="bttn" onClick={handleShow} >Details</button> </td>
                </tr>))}
                
            </tbody>
            }
            
        

        </table>
                            <Modal ClassName="modal" show={show} onHide={handleClose}>
                            
                                {orders && <Order orders={orders}  />} 
                            
                            </Modal>
            </div>
        );
}
 
export default OrderList;