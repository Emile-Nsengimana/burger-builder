import React from "react";
import "./Order.css";

const Order = (props) => (
  <div id="card" className="card text-center col-md-4">
    <div className="card-header">Burger #1 </div>
    <div className="card-body">
      <h5 className="card-title">Ingredients</h5>

      <p className="card-text">
        <span className="badge badge-dark">Meat(1)</span>
        <span className="badge badge-dark">Salad(1)</span>
        <span className="badge badge-dark">Cheese(1)</span>
        <span className="badge badge-dark">Bacon(1)</span>
      </p>
      <label className="btn btn-primary btn-cl">Rwf 2000</label>
    </div>
    <div className="card-footer text-muted">2 days ago</div>
  </div>
);

export default Order;
