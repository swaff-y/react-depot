import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import  CartData   from "./CartData"
// import { Test } from "./Test";
import { IconContext } from 'react-icons';

const Navbar = ({ dataNav, changeNav, totalNav, smallCartNav, clearState }) => {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState(dataNav);
  const [change, setChange] = useState(changeNav);
  const [smallCart, setSmallCart] = useState(smallCartNav);
  const [totalCalc, setTotalCalc] = useState(totalNav);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(()=>{
    setData(dataNav);
  },[dataNav]);
  useEffect(()=>{
    setTotalCalc(totalNav);
  },[totalNav]);
  useEffect(()=>{
    setChange(changeNav);
  },[changeNav]);
  useEffect(()=>{
    setSmallCart(smallCartNav);
  },[smallCartNav]);


  function zeroSmallCart(){
    setSmallCart(0);
  }

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
        <span className="nav-text-ins"><FaCartPlus /> <span className="cart-counter">{smallCart}</span></span>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              <AiOutlineClose />
            </Link>
          </li>
          { SidebarData.map((item, index) => {
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li className="nav-text-cart">
            <CartData dataCart={data} totalCart={totalCalc} zeroSmallCart={zeroSmallCart} clearState={clearState}/>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
};
export default Navbar
