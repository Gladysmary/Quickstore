import React, { useState } from "react";
import "./Products.css";
import product1 from "../assets/foodstufftwo.jpeg";
import product2 from "../assets/foodstuffthree.jpeg";
import product3 from "../assets/foodstuff.jpeg";
import ProductCard from "../Components/ProductCard";
import Modal from "../Components/Modal";

function Products() {
  const [showModal, setShowModal] = useState(false);
  const [ selectedProduct, setSelectedProduct] =useState(null);

  const handleAddClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }
  const handleConfirmAdd = (quantity) => {
    console.log( `Added ${quantity} of ${selectedProduct.name}`);
    setShowModal(false);
  }
  return (
    <>
     <div className="products-container">
        <h1>Our Products</h1>
        <div className="product-grid">
            <ProductCard name="Rice" price={500} img={product1} onAdd={() => handleAddClick({name:"Rice", price: 500})} />
            <ProductCard name="Beans" price={400} img={product2} onAdd={() => handleAddClick({name:"Beans", price: 400})} />
            <ProductCard name="Corn" price={200} img={product3} onAdd={() => handleAddClick({name:"Corn", price: 200})} />
            <ProductCard name="Egusi" price={400} img={product1} onAdd={() => handleAddClick({name:"Egusi", price: 400})} />
            <ProductCard name="Okpa" price={600} img={product2} onAdd={() => handleAddClick({name:"Okpa", price: 600})} />
            <ProductCard name="Groundnut" price={500} img={product3} onAdd={() => handleAddClick({name:"Groundnut", price: 500})} />
        </div>
        {showModal && (
          <Modal show={showModal} product={selectedProduct} onClose={() => setShowModal(false)} onAddToCart={handleConfirmAdd} />
        )}
     </div>
    </>
  );
}

export default Products;
