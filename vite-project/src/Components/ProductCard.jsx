import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, img }) {
    
    return(
        <>
            <div className="product-card">
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <p>N{price}</p>
                <button className="add-cart-btn" >Add To Cart</button>
            </div>
        </>
    );
}
export default ProductCard;