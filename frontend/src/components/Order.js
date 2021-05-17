import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./styles/Order.css";
import "./styles/Popup.css"


const Order = ({orders,id}) => {
  let order = orders.filter((order) => order.id === id);

  console.log(order[0].products);
  order[0].products.map((product) => {
    console.log(product.name);
  });

  return (
    <div className="Order">
      <div className="item-list">
        <h1
          style={{ fontSize: "20px", float: "left", fontFamily: "Quicksand" }}
        >
          Order ID: 0000{order[0].id}{" "}
        </h1>
        <br />
        <br />
        <h1
          style={{ fontSize: "20px", float: "left", fontFamily: "Quicksand" }}
        >
          Address : {order[0].streetaddress}
        </h1>
        <br />
        <br />
        <h1
          style={{ fontSize: "20px", float: "left", fontFamily: "Quicksand" }}
        >
          Date : {order[0].date}
        </h1>
        {order[0].products.map((product) => (
          <div className="item" key={product.id}>
            <div className="text-content">
              <h1 style={{ fontSize: "20px" }}></h1>
              <p>{product.name}</p>
              <p>{product.description} </p>
              <p>Price : {product.itemprice}</p>
              <p>quantity :1 </p>
            </div>
            <img src={product.imgurl} alt="picture" />
          </div>
        ))}
        <div className="status">
          <h4>Status : {order[0].status} </h4>
        </div>
      </div>
    </div>
  );
}
    

export default Order;