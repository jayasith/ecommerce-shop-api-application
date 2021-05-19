import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/DeliveryForm.css";
import "./styles/Order.css";
import "./styles/Form.css";
import EditItems from "./EditItems";
import Context from "./contexts/Context";

const ItemEditDelete = () => {
  const history = useHistory();

  const context = useContext(Context);
  const userAuth = context.userAuth;
  const [items, setItems] = useState([]);

  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);
  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    setItem(item);
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:9090/rest/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(`http://localhost:9090/rest/products/${userAuth}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  return (
    <div className="orderList">
      <Link to="/additems">Add item</Link>
      <br></br>
      <table className="table">
        <tr className="head">
          <th>
            <td>product name</td>
          </th>
          <th>
            <td>category</td>
          </th>
          <th>
            <td>Description</td>
          </th>
          <th>
            <td>Item Price</td>
          </th>
          <th>
            <td>Image</td>
          </th>
          <th>
            <td>Action</td>
          </th>
        </tr>

        {items.map((item) => (
          <tr className="rw" key={item.sellerId}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>{item.itemprice}</td>
            <td>
              <img
                src={item.imgurl}
                style={{ height: "100px", width: "100px" }}
              />
            </td>

            <td style={{ display: "flex" }}>
              <button
                className="bttn"
                onClick={() => {
                  handleShow(items);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <Modal className="modal" show={show} onHide={handleClose}>
        {item && <EditItems item={item} />}
      </Modal>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ItemEditDelete;
