import React from "react";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/DeliveryForm.css";
import "./styles/Form.css";
import Context from "./contexts/Context";

const ItemEditDelete = () => {
  const history = useHistory();

  const context = useContext(Context);
  const userAuth = context.userAuth;
  const [items, setItems] = useState([]);

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
    <div>
      <form class="f1">
        <table>
          <tr>
            <th>
              <td>products</td>
            </th>
            <th>
              <td>Edit</td>
            </th>
            <th>
              <td>Delete</td>
            </th>
          </tr>
          {items.map((item) => (
            <tr key={item.sellerId}>
              <th>
                <td>{item.name}</td>
                <td>{}</td>
              </th>
            </tr>
          ))}
        </table>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ItemEditDelete;
