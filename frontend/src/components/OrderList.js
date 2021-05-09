import "./styles/Order.css";
import { useEffect, useState } from "react";
import Order from "./Order";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [Clicked, setClicked] = useState(null);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (Id) => {
    setShow(true);
    setId(Id);
  };

  useEffect(() => {
    fetch("http://localhost:8000/orders")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  return (
    <div className="orderList">
      <h1 style={{ textAlign: "center", padding: "20px" }}>User's Orders</h1>
      <table className="table">
        <thead>
          <tr className="head">
            <th>Address</th>
            <th>Order Id</th>
            <th> Order Status</th>
            <th> Seller</th>
            <th></th>
          </tr>
        </thead>
        {orders && (
          <tbody>
            {orders.map((order) => (
              <tr className="rw" key={order.id}>
                <td>{order.location}</td>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td> {order.sellerId}</td>
                <td>
                  <button
                    className="bttn"
                    onClick={() => {
                      handleShow(order.id);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <Modal className="modal" show={show} onHide={handleClose}>
        {orders && <Order orders={orders} id={id} />}
      </Modal>
    </div>
  );
};

export default OrderList;
