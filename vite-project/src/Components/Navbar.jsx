import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

 function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">🛒Quickstore</div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button className="cart-btn">Cart</button>
        </nav>
    );
}
export default Navbar;