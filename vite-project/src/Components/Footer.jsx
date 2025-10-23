import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">🛒Quickstore</div>
                <ul className="footer-links">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                </ul>
                <p className="footer-copy">&copy; {new Date().getFullYear()} Quickstore. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer;
