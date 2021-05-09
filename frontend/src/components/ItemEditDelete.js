import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./styles/DeliveryForm.css";

import "./styles/Form.css";
import Context from "./contexts/Context";

const ItemEditDelete = () => {
  const history = useHistory();

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
        </table>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ItemEditDelete;
