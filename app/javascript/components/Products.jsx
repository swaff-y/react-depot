import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
      const url = "/products";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ products: response }))
        .catch(() => this.props.history.push("/"));
  };

  handleClick = (e) => {
    const id = e.target.value;
    fetch(`line_items/${id}`);
  }

  render() {
    const { products } = this.state;

    const allProducts = products.map((product, index) => (
      <div key={index} className="col-md-6 col-lg-4">

        <div className="card mb-4">
          <Link to={`/product/${product.id}`} className="prodLink">
            <img
              src={product.image_url}
              className="card-img-top"
              alt={`${product.title} image`}
              />
          </Link>
          <div className="card-body">
            <Link to={`/product/${product.id}`} className="prodLink" id="prodLink">
              <h5 className="card-title">{product.title}</h5>
            </Link>
            <button onClick={this.handleClick} className="btn btn-primary" value={product.id}>
              Add to Cart
            </button>
            <span className="price float-right">${ product.price }</span>
          </div>
        </div>
      </div>
    ));

    const noProduct = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No Products yet. Why not <Link to="/new_product_path">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Products for all</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular products, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/products/new" className="btn custom-button">
                Create New Product
              </Link>
            </div>
            <div className="row">
              {products.length > 0 ? allProducts : noProduct}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }

}
export default Products;
