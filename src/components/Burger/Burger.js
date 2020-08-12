import React from "react";
import _ from "lodash";
import BurgerIngrendients from "./BurgerIngrendients/BurgerIngrendients";
import "./Burger.css";

const Burger = (props) => {
  let ingredients = !_.isEmpty(props.ingredients)
    ? Object.keys(props.ingredients)
        .map((key) =>
          [...Array(props.ingredients[key])].map((_, i) => (
            <BurgerIngrendients key={key + i} type={key} />
          ))
        )
        .reduce((arr, el) => {
          return arr.concat(el);
        })
    : ["Unexpected reload, please try again!"];

  if (ingredients.length === 0)
    ingredients = <h4>Please start adding ingredients</h4>;

  return (
    <div className="burger">
      <BurgerIngrendients type="bread-top" />
      {ingredients}
      <BurgerIngrendients type="bread-bottom" />
    </div>
  );
};

export default Burger;
