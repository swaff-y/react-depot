import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
    </Switch>
  </Router>
);
