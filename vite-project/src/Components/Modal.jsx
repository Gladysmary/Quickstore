import React, { useState } from "react";
import "./Modal.css"

function Modal ({ show, product, onClose, onAddToCart})  {
    const [ unit, setUnit] = useState("");
    const [quantity, setQuantity] = useState(1);

    if(!show) return null;

    const handleAddClick = () => {
        if (!unit) {
            alert("please select a unit first!");
            return;
        }
        onAddToCart({ unit, quantity });
    };
    
  return (
    <>
        <div className="modal-overlay">
            <div className="modal-content">
                 <h2>Select Unit</h2>
                 <p>{product?.name}</p>
                
                <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)} 
                    className="unit-selector"   
                >
                    <option value="">--Select Unit--</option>
                    <option value="Bag">Bag</option>
                    <option value="Mudu">Mudu</option>
                    <option value="Cup">Cup</option>
                </select>

                {/* When a user selects a unit, then they can select the quantity */}
                
                {unit && (
                    <div className="quantity-section">
                        <label htmlFor="quantityInput">
                            Quantity
                        </label>
                        <input 
                            id="quantityInput"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                )}
                <div className="modal-buttons">
                    <button onClick={handleAddClick} className="confirm-btn">
                        Add This To Cart
                    </button>
                    <button onClick={onClose} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal;
