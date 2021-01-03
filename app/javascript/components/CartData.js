import React, {useState, useEffect} from 'react'
import { DefaultData } from "./DefaultData";
import { Link } from "react-router-dom";

export default function CartData({dataCart, totalCart, zeroSmallCart, clearState, checkOutTog}){
  const [data, setData] = useState(dataCart);
  const [totalCalc, setTotalCalc] = useState(totalCart);
  const [checkOut, setCheckOut] = useState(false);
   // console.log('data cart:' , data);
  // console.log('total cart:' , totalCalc);

  useEffect(()=>{
    setData(dataCart);
  },[dataCart]);
  useEffect(()=>{
    setTotalCalc(totalCart);
  },[totalCart]);
  useEffect(()=>{
    setCheckOut(checkOutTog);
  },[checkOutTog]);

  const handleClick = (e) => {
    const id = e.target.value;
    fetch(`/carts/delete/${JSON.parse(data)[0].cart_id}`)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then(json=>{
      setData(JSON.stringify(DefaultData));
      setTotalCalc(0);
      zeroSmallCart();
      clearState();
    });
  }

  const handleCheckout = (e) => {
    const id = e.target.value;
    console.log("id? -> ", id);
  };

  let textClass = "";
  let buttons = (<></>);
  if(checkOutTog === true){
    textClass = "checkout-text-ins";
  }else{
    textClass = "nav-text-ins";
    buttons = (
      <tr>
        <td colSpan="2">
          <button className="btn btn-danger" onClick={handleClick}
          value={ data }>
            Empty Cart
          </button>
        </td>
        <td>
          <Link to={`/order/new`}>
          <button
            className="btn btn-primary"
            onClick={handleCheckout}
            value={ data }>
            Checkout
          </button>
          </Link>
        </td>
      </tr>
    );
  }

  // console.log(data);
  const dataIns = JSON.parse(data);
  const allData = dataIns.map((data, index) => (
    <tr key={ index }>
      <td className={textClass + " text-nowrap"}>{data.quantity} x </td>
      <td className={textClass + " text-left"}>{data.product.title}</td>
      <td className={textClass}>${data.product.price * data.quantity}</td>
    </tr>
  ));

  const noData = (
    <tr className={textClass}>
      <td>
        <h4>
          Empty Cart
        </h4>
      </td>
    </tr>
  );

  return(
    <table className="nav-cart">
      <tbody>
        {data.length > 0 ? allData : noData }
        <tr className="total_line">
          <td></td>
          <td className= {textClass + " text-right r-5"}>Total </td>
          <td className={textClass}> ${ totalCalc }</td>
        </tr>
        { buttons }
      </tbody>
    </table>
  )
}
