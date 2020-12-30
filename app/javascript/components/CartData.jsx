import React from "react";
import { Link } from "react-router-dom";

export class CartData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: ''
    };
    this.handleClick = this.handleClick.bind(this);
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
        // .catch(() => this.props.history.push("/"));
      fetch(urlTwo)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(data => this.setState({ total: data }))
        // .catch(() => this.props.history.push("/"));
  };

  handleClick = (e) => {
    const id = e.target.value;
    fetch(`carts/delete/${this.state.data[0].cart_id}`);
    this.setState({ data: [] });
    this.setState({ total: "" });
  }

  render() {
    const { data } = this.state;

    // console.log(data);
    const allData = data.map((data, index) => (
      <tr key={ index }>
        <td className="nav-text-ins text-nowrap">{data.quantity} x </td>
        <td className="nav-text-ins text-left">{data.product.title}</td>
        <td className="nav-text-ins">${data.product.price * data.quantity}</td>
      </tr>
    ));

    const noData = (
      <tr className="nav-text-ins">
        <td>
          <h4>
            Empty Cart
          </h4>
        </td>
      </tr>
    );

    const { total } = this.state;
    return (

        <table className="nav-cart">
          <tbody>
            {data.length > 0 ? allData : noData }
            <tr className="total_line">
              <td></td>
              <td className="nav-text-ins text-right r-5">Total </td>
              <td className="nav-text-ins">${ total }</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="btn btn-primary" onClick={this.handleClick}
                value={ data }>
                  Empty Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>

    );
  }

}
