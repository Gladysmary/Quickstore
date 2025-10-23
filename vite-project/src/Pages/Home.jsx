import React from "react";
import "./Home.css";
import foodstuff from "../assets/foodstuffthree.jpeg";
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
        <div className="home-container">
            <section className="hero" style={{ backgroundImage: `url(${foodstuff}) ` }}>
                <div className="hero-content">
                    <h1>Welcome to Quickstore!</h1>
                    <p>Come and get your foodstuff at affordable prices...</p>
                    <Link to="/products">
                      <button className="shop-btn">Shop Now</button>
                    </Link>
                </div>
            </section>
        </div>
    </>
  )
}

export default Home;
