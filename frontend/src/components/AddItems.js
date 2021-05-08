import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./styles/DeliveryForm.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Form.css";

const AddItems = ({ fetchEndpoint, title, isAddItems }) => {
  const [name, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setItemurl] = useState("");
  const [itemprice, setItemprice] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const history = useHistory();

  document.title = title;

  const handleItem = async (e) => {
    e.preventDefault();
    const additem = { name, category, description, imgurl, itemprice };
    setIsAdding(true);
    console.log(additem);
    try {
      const response = await fetch(`http://localhost:9090/rest/products/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(additem),
      });
      console.log(response);
      if (response.ok) {
        setItem("");
        setCategory("");
        setDescription("");
        setItemurl("");
        setItemprice("");
        setIsAdding(false);
        toast.success("Product has been added");
        history.push("./ItemEditDelete");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setIsAdding(false);
    }
  };

  return (
    <div class="p1" align="center">
      <form className="addItemForm" onSubmit={(e) => handleItem(e)}>
        <table>
          <h1>Add Item for sell</h1>
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

export default AddItems;
