import React, { useEffect } from "react";
import "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
  useEffect(() => {}, [props.show]);
  return (
    <>
      <BackDrop show={props.show} clicked={props.cancelOrder} />
      <div
        className="modal-box"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
