import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Navbar from "./Navbar";
import { DefaultData } from "./DefaultData";

const App = () => {
  const [change, setChange] = useState(0);
  const [smallCart, setSmallCart] = useState(0);
  const [data, setData] = useState(JSON.stringify(DefaultData));
  const [totalCalc, setTotalCalc] = useState(0);
  const [products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingTotal, setLoadingTotal] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

//fecth last cart
  useEffect( () => {
    const url = "/carts/last";
    fetch(url)
    .then(res => {
      if(res.ok){
        return res.json()
      }
      return DefaultData
    })
    .then(json => {
      if(json[0].id === 0){
        setSmallCart(0);
        console.log(json[0].id);
      }else{
        setSmallCart(json.length);
        console.log("small cart: ", json, json[0].id, json.length);
      }
      setData(JSON.stringify(json));
      setLoadingData(false);
    })
  },[change])
//fecth totals
  useEffect( () => {
    const url = "/carts/last/total";
    fetch(url)
    .then(res => {
      if(res.ok){
        return res.json()
      }
      return 0
    })
    .then(json => {
      setTotalCalc(json);
      setLoadingTotal(false);
    })
  },[change])
//fetch products
  useEffect(()=>{
    const url = "/products";
    fetch(url)
      .then(res => {
          return res.json();
      })
      .then(json => {
        setProducts(JSON.stringify(json));
        setLoadingProducts(false);
        // console.log("products run");
      })
  },[products])

  function handleChange(){
    setChange(prevChange =>{
      return prevChange + 1;
    });
    // console.log("change clicked: ", JSON.parse(data).length);

    // setSmallCart(JSON.parse(data).length);
  }

  function clearState(){
    console.log("empty clicked");
    // setLoadingData(true);
    // setLoadingTotal(true);

    setSmallCart(0);

    setChange(prevChange =>{
      return prevChange + 1;
    });
  };

  // console.log('app data', data);
  // console.log('app total', totalCalc);
  // console.log('app change', change);
  let loading = true;
  if(loadingTotal === false && loadingData === false){
    loading = false;
  //  setSmallCart(JSON.parse(data).length);
  }


  // console.log("check:", products);
  return(
    <Router>
      {loading ? <div>Loading.....</div> : <Navbar changeNav={change} dataNav={data} totalNav={totalCalc} smallCartNav={smallCart} clearState={clearState}/>}

      <Switch>
        <Route path="/" exact component={Home} />
        {
          loadingProducts ? <div>Loading...</div> : <Route path="/products" render={(props)=>(<Products {...props} handleChange={handleChange} productsApp={products} loadingApp={loadingProducts}/>)} />
        }
      </Switch>
    </Router>
  )
}

export default App
