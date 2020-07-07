import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <BurgerBuilder />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
