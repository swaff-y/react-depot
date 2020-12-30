import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Navbar from "./Navbar";
import CartData from "./CartData";

class App extends React.Component {
  state = {
    change: 0,
  }
  handleChange = ( count ) => {
    let change = this.state.change++;
    this.setState({ change: count })
  }
  render(){
    return(
      <Router>
        <Navbar change={this.state.change} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" render={(props)=>(<Products {...props} change={this.handleChange} />)} />
        </Switch>
      </Router>
    )
  }
}

export default App
