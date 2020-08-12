import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className="build-control">
      <div className="label">{props.label}</div>
      <button
        className="less"
        onClick={() => props.removeIngredient(props.type)}
        disabled={props.disabledControls[props.type]}
      >
        Less
      </button>

      <button className="more" onClick={() => props.addIngredient(props.type)}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
