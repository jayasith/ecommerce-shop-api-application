import { Link } from "react-router-dom";
import Order from "./Order";
import "./styles/Order.css";

const popup =() =>{
 <Link to="/order"></Link>
}
const OrderList = () => {


    return (  
    <div className="orderList">
      <h1 style={{textAlign:"center",padding:"20px"}}>User's Orders</h1>  
    <table className="table">
      <thead>
          <th>Address</th>
          <th>Order Id</th>
          <th> Order Status</th>
          <th> Seller</th>
      </thead>
      <tbody>
          <tr className="row" onClick={popup}> 
            <td>Kaluthra</td>
            <td> 000001</td>
            <td>Pending</td>
            <td> Ranush</td>  
          </tr>
          <tr className="row"> 
            <td>Kaluthra</td>
            <td> 000001</td>
            <td>Pending</td>
            <td> Ranush</td>  
          </tr>  
          <tr className="row"> 
            <td>Kaluthra</td>
            <td> 000001</td>
            <td>Pending</td>
            <td> Ranush</td>  
          </tr>   
      </tbody>
  </table>
              </div>
        );
}
 
export default OrderList;