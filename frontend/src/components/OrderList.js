import "./styles/Order.css";

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
          <tr> 
            <td>Kaluthra</td>
            <td> 000001</td>
            <td>Pending</td>
            <td> Ranush</td>  
          </tr>
          <tr> 
            <td>Kaluthra</td>
            <td> 000001</td>
            <td>Pending</td>
            <td> Ranush</td>  
          </tr>  
          <tr> 
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