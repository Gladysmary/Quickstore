import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

function App(){
  return(
    <>
        <Navbar/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="Products" element={<Products/>} />
              <Route path="About" element={<About/>} />
              <Route path="Contact" element={<Contact/>} />
            </Routes>
          </main>
        <Footer/>
    </>
  );
}
export default App;