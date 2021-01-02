import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import  CartData   from "./CartData"
// import { Test } from "./Test";
import { IconContext } from 'react-icons';

const Navbar = ({ dataNav, changeNav, totalNav }) => {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState(dataNav);
  const [change, setChange] = useState(changeNav);
  const [totalCalc, setTotal] = useState(totalNav);
  const showSidebar = () => setSidebar(!sidebar)

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
        <span className="nav-text-ins">{change}</span>
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
            <CartData dataCart={data} totalCart={totalCalc}/>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
};
export default Navbar
