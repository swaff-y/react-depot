import React, {useState, useEffect} from "react";
import { PropTypes } from 'react'
import { Link } from "react-router-dom";

const Products = ({handleChange, productsApp, loadingApp}) => {
  const [products, setProducts] = useState(productsApp);
  const [loading, setLoading] = useState(true);
  // const [load, setLoad] = useState(true);

  useEffect(()=>{
    setProducts(productsApp);
    // console.log("set products", productsApp);
  },[productsApp])
  useEffect(()=>{
    setLoading(loading)
  },[loadingApp])


  const handleClick = (e) => {
    const id = e.target.value;
    const url = `line_item/${id}`;
    fetch(url)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then(json=>{
      handleChange();
      // setLoad(true);
    })
    .catch(Error=> console.error(error))
    // setLoad(false);
  };

    const prod = JSON.parse(products);
     // console.log("prod", prod);
    const allProducts = prod.map((product, index) => (
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
            <button onClick={handleClick} className="btn custom-button" value={product.id}>
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
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/products/new" className="btn custom-button">
              Create New Product
            </Link>
          </div>
          <div className="row">
            {prod.length > 0 ? allProducts : noProduct}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
}

export default Products;

// class Products extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       change: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   componentDidMount() {
//       const url = "/products";
//       fetch(url)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error("Network response was not ok.");
//         })
//         .then(response => this.setState({ products: response }))
//         .catch(() => this.props.history.push("/"));
//   };
//
//   handleClick = (e) => {
//     const newChange = this.state.change + 1;
//     const id = e.target.value;
//     fetch(`line_item/${id}`);
//     this.props.change( newChange );
//     this.setState({ change: newChange });
//   }
//
//   render() {
//     const { products } = this.state;
//
//     const allProducts = products.map((product, index) => (
//       <div key={index} className="col-md-6 col-lg-4">
//
//         <div className="card mb-4">
//           <Link to={`/product/${product.id}`} className="prodLink">
//             <img
//               src={product.image_url}
//               className="card-img-top"
//               alt={`${product.title} image`}
//               />
//           </Link>
//           <div className="card-body">
//             <Link to={`/product/${product.id}`} className="prodLink" id="prodLink">
//               <h5 className="card-title">{product.title}</h5>
//             </Link>
//             <button onClick={this.handleClick} className="btn custom-button" value={product.id}>
//               Add to Cart
//             </button>
//             <span className="price float-right">${ product.price }</span>
//           </div>
//         </div>
//       </div>
//     ));
//
//     const noProduct = (
//       <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
//         <h4>
//           No Products yet. Why not <Link to="/new_product_path">create one</Link>
//         </h4>
//       </div>
//     );
//
//     return (
//       <>
//
//         <div className="py-5">
//           <main className="container">
//             <div className="text-right mb-3">
//               <Link to="/products/new" className="btn custom-button">
//                 Create New Product
//               </Link>
//             </div>
//             <div className="row">
//               {products.length > 0 ? allProducts : noProduct}
//             </div>
//             <Link to="/" className="btn btn-link">
//               Home
//             </Link>
//           </main>
//         </div>
//       </>
//     );
//   }
//
// }
//
