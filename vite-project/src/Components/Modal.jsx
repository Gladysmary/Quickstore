import React from "react";


function Modal ({ show, product, onClose, onAddToCart})  {
    if(!show) return null;
    const handleAddClick = () => {
        const quantity = parseInt(document.getElementById("quantityInput").value);
        onAddToCart(quantity);
    }
  return (
    <>
        <div className="modal-overlay">
            <div className="modal-content">
                 <h2>Select Quantity</h2>
                 <p>{product?.name}</p>
                 <input 
                    type="number"
                    min="1"
                    defaultValue="1"
                    id="quantityInput"
                />
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
