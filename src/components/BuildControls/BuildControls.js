import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const CONTROLS = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="build-controls">
      <div>
        Total price: <strong>{props.totalPrice}</strong> Rwf
      </div>
      {CONTROLS.map((control) => (
        <BuildControl
          key={control.type}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          label={control.label}
          type={control.type}
          disabledControls={props.disabledControls}
          checkout={props.checkout}
        />
      ))}
      <button
        className="btn btn-success"
        disabled={props.checkout}
        onClick={props.order}
      >
        Order now
      </button>
    </div>
  );
};

export default BuildControls;
