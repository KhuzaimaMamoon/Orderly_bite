import React, {useContext, useState} from 'react';
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";
import {StoreContext} from "../../Context/StoreContext.jsx";

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
    return (
        <div className="navbar">
           <Link to="/"> <img src={assets.logo} alt="logo" className="logo"/></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
               <Link to="/menu"onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</Link>
                <a href="#appDownload" onClick={()=>setMenu("Mobile-app")}  className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
                <a href="#footer" onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search_icon" className="search_icon"/>
                <div className="navbar-search-icon">
                    <Link to="/cart"> <img src={assets.basket_icon} alt="basket_icon" className="basket_icon"/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
