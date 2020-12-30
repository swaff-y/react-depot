import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import CartData from "../components/CartData";

export default (
  <>
  <Router>
    <Navbar data="" />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
    </Switch>
  </Router>
  </>
);
