import React from "react";
import Order from "../../components/Order/Order";
import "./Orders.css";

const Orders = (props) => (
  <div className="container orders">
    <div className="row">
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </div>
  </div>
);

export default Orders;
