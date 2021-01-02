import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Navbar from "./Navbar";


const App = () => {
  const [change, setChange] = useState(0);
  const [data, setData] = useState([]);
  const [totalCalc, setTotalCalc] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [loadingTotal, setLoadingTotal] = useState(true);

  useEffect( () => {
    const url = "/carts/last";
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(json => {
      setData(JSON.stringify(json));
      setLoadingData(false);
      console.log("fetch data:", "data processed");
    })
  },[data])
  useEffect( () => {
    const url = "/carts/last/total";
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(json => {
      setTotalCalc(json);
      setLoadingTotal(false);
      console.log("fetch total:", "total processed");
    })
  },[totalCalc])

  function handleChange(){
    setChange(prevChange =>{
      change + 1
    });
  }
  // console.log('app data', data);
  // console.log('app total', totalCalc);
  // console.log('app change', change);
  let loading = true;
  if(loadingTotal === false && loadingData === false){
    loading = false;
  }

  return(
    <Router>
      {loading ? <div>Loading.....</div> : <Navbar changeNav={change} dataNav={data} totalNav={totalCalc} />}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" render={(props)=>(<Products {...props} change={handleChange} />)} />
      </Switch>
    </Router>
  )
}

// class App extends React.Component {
//   state = {
//     change: 0,
//     data: [],
//     total: '',
//     loading: true
//   };
//
//   handleChange = ( count ) => {
//     this.setState({ loading: true })
//     let change = this.state.change++;
//     this.setState({ change: count })
//     const url = "/carts/last";
//     const urlTwo = "/carts/last/total";
//     fetch(url)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then(data => this.setState({ data: data, loading: false }))
//       // .catch(() => this.props.history.push("/"));
//     fetch(urlTwo)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then(data => this.setState({ total: data }))
//       // .catch(() => this.props.history.push("/"));
//   };
//
//   varChange = ( count ) => {
//     // this.setState({ change: count })
//   }
//   // async changeFunc(){
//   //   const url = "/carts/last";
//   //   const urlTwo = "/carts/last/total";
//   //   const response = await fetch(url);
//   //   const data = await response.json();
//   //   this.setState({ data: data })
//   //   const responseTwo = await fetch(urlTwo);
//   //   const dataTwo = await responseTwo.json();
//   //   this.setState({ total: dataTwo, loading: false })
//   // }
//
//   // componentDidUpdate(prevProps){
//   //   if(prevProps.change !== this.props.change){
//   //     this.setState({ len: this.props.change});
//   //     const url = "/carts/last";
//   //     const urlTwo = "/carts/last/total";
//   //     fetch(url)
//   //       .then(response => {
//   //         if (response.ok) {
//   //           return response.json();
//   //         }
//   //         throw new Error("Network response was not ok.");
//   //       })
//   //       .then(data => this.setState({ data: data }))
//   //       // .catch(() => this.props.history.push("/"));
//   //     fetch(urlTwo)
//   //       .then(response => {
//   //         if (response.ok) {
//   //           return response.json();
//   //         }
//   //         throw new Error("Network response was not ok.");
//   //       })
//   //       .then(data => this.setState({ total: data }))
//   //       // .catch(() => this.props.history.push("/"));
//   //   }
//   // }
//
//   async componentDidMount(){
//     const url = "/carts/last";
//     const urlTwo = "/carts/last/total";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ data: data })
//     const responseTwo = await fetch(urlTwo);
//     const dataTwo = await responseTwo.json();
//     this.setState({ total: dataTwo, loading: false, change: data.length })
//   };
//
//   render(){
//     console.log("app data",this.state.data);
//     return(
//       <Router>
//         {this.state.loading ? (<div>Loading...</div>) : (<Navbar change={this.state.change} data={this.state.data} total={this.state.total} varChange={this.varChange}/>)}
//
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/products" render={(props)=>(<Products {...props} change={this.handleChange} />)} />
//         </Switch>
//       </Router>
//     )
//   }
// }

export default App
