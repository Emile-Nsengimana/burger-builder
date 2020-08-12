import React from "react";
import axios from "axios";
import "./ContactInfo.css";

const ContactInfo = (props) => {
  const handleOrder = async (e) => {
    e.preventDefault();
    const order = {
      // ingredients,
      customer: {
        name: "Emile N.",
        address: {
          country: "Rwanda",
          city: "Kicukiro",
          street: "KK 270st",
        },
        email: "emile@gmail.com",
      },
      deliveryMethod: "premium",
    };
    const orderBurger = await axios.post(
      "https://burger-app-39bda.firebaseio.com/rest/saving-data/orders.json",
      order
    );
    console.log(orderBurger);
  };
  return (
    <div className="contact-info">
      <form onSubmit={handleOrder}>
        <h4>Personal information</h4>
        <div className="row form-group">
          <label className="col-md-3">Firstname:</label>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
        </div>
        <div className="row form-group">
          <label className="col-md-3">Lastname:</label>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
        </div>
        <div className="row form-group">
          <label className="col-md-3">Country:</label>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
        </div>
        <div className="row form-group">
          <label className="col-md-3">City:</label>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
        </div>
        <div className="row form-group">
          <label className="col-md-3">Post code:</label>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
