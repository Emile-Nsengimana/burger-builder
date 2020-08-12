import React, { useEffect, useState } from "react";
import Burger from "../../components/Burger/Burger";
import ContactInfo from "./ContactInfo/ContactInfo";
import { Route } from "react-router-dom";
import qs from "qs";
import "./Checkout.css";

const Checkout = (props) => {
  const [queryParms, setQueryParms] = useState(props.history.location.search);
  const [ingredients, setIngredients] = useState({
    ...qs.parse(queryParms.replace("?", "")),
  });
  Object.entries(ingredients).forEach((v) => (ingredients[v[0]] = v[1] * 1));
  console.log(ingredients);
  return (
    <div className="checkout-box">
      <h3>Hope it's delicious</h3>
      <Burger ingredients={ingredients} />
      <div className="btn-group">
        <button
          className="btn btn-danger"
          onClick={() => props.history.goBack()}
        >
          Cancel
        </button>
        <button
          className="btn btn-success"
          onClick={() => props.history.replace("/checkout/contact-info")}
        >
          Continue
        </button>
      </div>
      <Route
        path={props.match.path + "/contact-info"}
        component={ContactInfo}
      />
    </div>
  );
};

export default Checkout;
