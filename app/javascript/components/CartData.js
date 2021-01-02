import React, {useState, useEffect} from 'react'
import { DefaultData } from "./DefaultData";

export default function CartData({dataCart, totalCart, zeroSmallCart, clearState}){
  const [data, setData] = useState(dataCart);
  const [totalCalc, setTotalCalc] = useState(totalCart);
   // console.log('data cart:' , data);
  // console.log('total cart:' , totalCalc);

  useEffect(()=>{
    setData(dataCart);
  },[dataCart]);
  useEffect(()=>{
    setTotalCalc(totalCart);
  },[totalCart]);

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

  // console.log(data);
  const dataIns = JSON.parse(data);
  const allData = dataIns.map((data, index) => (
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
  return(
    <table className="nav-cart">
      <tbody>
        {data.length > 0 ? allData : noData }
        <tr className="total_line">
          <td></td>
          <td className="nav-text-ins text-right r-5">Total </td>
          <td className="nav-text-ins">${ totalCalc }</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn btn-primary" onClick={handleClick}
            value={ data }>
              Empty Cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
