import React from "react";
import { Link } from "react-router-dom";

export class CartData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: ''
    };
  }

  componentDidMount() {
      const url = "/carts/last";
      const urlTwo = "/carts/last/total";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(data => this.setState({ data: data }))
        .catch(() => this.props.history.push("/"));
      fetch(urlTwo)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(data => this.setState({ total: data }))
        .catch(() => this.props.history.push("/"));
  };


  render() {
    const { data } = this.state;
    // console.log(data);
    const allData = data.map((data, index) => (
      <tr key={ index }>
        <td className="nav-text-ins">{data.quantity}</td>
        <td className="nav-text-ins">{data.product_id}</td>
        <td className="nav-text-ins">{data.total_price}</td>
      </tr>
    ));

    const noData = (
      <div className="">
        <h4>
          Empty Cart
        </h4>
      </div>
    );

    const { total } = this.state;
    return (

        <table className="nav-cart">
          <thead>
            <tr>
              <th colSpan="3" className="nav-text-ins">Your Cart</th>
            </tr>
          </thead>
          <tbody>
          { allData }
          <tr className="total_line">
            <td className="nav-text-ins">Total</td>
            <td className="nav-text-ins">${ total }</td>
          </tr>
          <tr>
            <td colSpan="2"><button className="btn btn-primary">Empty Cart</button></td>
          </tr>
          </tbody>
        </table>

    );
  }

}
