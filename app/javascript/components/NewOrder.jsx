import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import  CartData   from "./CartData"

const NewOrder = ({dataOrder,totalOrder,zeroSmallCart, clearState}) => {
  const [data,setData] = useState(dataOrder);
  const [totalCalc,setTotalCalc] = useState(totalOrder);
  useEffect(()=>{
    setData(dataOrder);
  },[dataOrder]);
  useEffect(()=>{
    setTotalCalc(totalOrder);
  },[totalOrder]);

  const handleChange = () => {
    console.log("change detected");
  }
  const submitForm = () => {
    console.log("Form Submitted");
  }

  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <h1 className="font-weight-normal mb-5">
            Thank for your order
          </h1>
          <CartData dataCart={data} totalCart={totalCalc} zeroSmallCart={zeroSmallCart} clearState={clearState} checkOutTog={true}/>
          <small id="cartHelp" className="form-text text-muted">
            *Orders dependant on available stock.
          </small>
        </div>
        <div className="col-sm-12 col-lg-6">
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="customerName">Name</label>
              <input
                type="text"
                name="name"
                id="customerName"
                className="form-control"
                required
                onChange={handleChange}
              />
              <label htmlFor="customerAddress" className="mt-3">Address</label>
              <textarea
                name="address"
                id="customerAddress"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
            <label htmlFor="customerEmail" className="mt-0.5">Email</label>
            <input
              type="email"
              name="email"
              id="customerEmail"
              className="form-control"
              required
              onChange={handleChange}
            />
            <div className="dropdown mt-3">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Payment Options
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/order/paypal">PayPal</Link>
                <Link className="dropdown-item" to="/order/card">Credit Card</Link>
                <Link className="dropdown-item" to="/order/check">Check</Link>
              </div>
            </div>
            <Link to="/products" className="btn btn-link mt-3">
              Back to products
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewOrder;
