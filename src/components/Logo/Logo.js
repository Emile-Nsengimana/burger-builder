import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = (props) => (
  <div className="logo" style={{ height: props.height }}>
    <NavLink to="/">
      <img src={logo} alt="" />
    </NavLink>
  </div>
);

export default Logo;
