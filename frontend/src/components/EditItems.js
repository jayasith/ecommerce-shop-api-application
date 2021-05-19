import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/DeliveryForm.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Order.css";
import "./styles/Form.css";
import Context from "./contexts/Context";

const EditItems = ({ item }) => {
  console.log(item[0]);

  //   let item = items.filter((item) => item.id === id);
  //   console.log(item);
  console.log(item[0].name);
  const [name, setItem] = useState(item[0].name);
  const [category, setCategory] = useState(item[0].category);
  const [description, setDescription] = useState(item[0].description);
  const [imgurl, setItemurl] = useState(item[0].imgurl);
  const [itemprice, setItemprice] = useState(item[0].itemprice);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div class="p1" align="center">
      <form className="addItemForm" onSubmit={(e) => handleItem(e)}>
        <table>
          <h1>Edit Item</h1>
          <br />
          {
            <div>
              <label htmlFor="name">Item Name</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setItem(e.target.value)}
              ></input>
              <br />
            </div>
          }

          {
            <div>
              <label htmlFor="category">Category</label>
              <br />
              <input
                type="text"
                name="category"
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
              <br />
            </div>
          }

          {
            <div>
              <label htmlFor="description">Description</label>
              <br />
              <input
                type="text"
                name="description"
                id="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
          }

          {
            <div>
              <label htmlFor="imgurl">Image Url</label>
              <br />
              <input
                type="text"
                name="imgurl"
                id="imgurl"
                required
                value={imgurl}
                onChange={(e) => setItemurl(e.target.value)}
              ></input>
              <br />
            </div>
          }

          {
            <div>
              <label htmlFor="itemprice">Item Price</label>
              <br />
              <input
                type="text"
                name="itemprice"
                id="itemprice"
                required
                value={itemprice}
                onChange={(e) => setItemprice(e.target.value)}
              ></input>
              <br />
            </div>
          }
        </table>
        <button class="btn" value="SUBMIT">
          SUBMIT
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default EditItems;
