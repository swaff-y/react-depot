import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const View = ({productIdApp, handleChange}) => {
  const [productId, setProductId] = useState(productIdApp);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const url = `/product/${productId}`
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(json => {
      setProductData(JSON.stringify(json));
      setLoading(false);
    })
  },[productData]);

  const handleClick = (e) => {
    const id = e.target.value;
    const url = `/line_item/${id}`;
    fetch(url)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then(json=>{
      handleChange();
    })
    .catch(Error=> console.error(error))
  };

  let html = (<div>Loading...</div>)
  if(loading === false){
    // console.log("product stuff: ", productData);
    const product = JSON.parse(productData);
    let description = product.description.replace("<p>",'');
    description = description.replace("</p>",'');
    html = (
      <>
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={product.image_url}
            alt={`${product.title} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {product.title}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <ul className="list-group">
                <h5 className="mb-2">Description</h5>
                {description}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-6">
              <button
                type="button"
                className="btn custom-button"
                onClick={handleClick}
                value={product.id}
                >
                Add to cart
              </button>
            </div>
          </div>
          <Link to="/products" className="btn btn-link">
            Back to products
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {html}
    </>
  );
}
export default View;
