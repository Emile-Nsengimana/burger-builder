import React from "react";
import "./NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
