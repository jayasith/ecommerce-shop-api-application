import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ItemEditDelete = () => {
  const history = useHistory();

  return (
    <div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ItemEditDelete;
