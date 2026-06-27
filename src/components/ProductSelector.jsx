import React, { useState } from 'react';

function ProductSelector() {
  const [quantity, setQuantity] = useState(1);
  const price = 50000;
  const totalAmount = quantity * price;

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="card">
      <h2> Product Quantity Selector</h2>
      
      {/* REQUIREMENTS SECTION: Just the controls */}
      <div className="controls-section">
        <div className="quantity-controls">
          <button className="qty-btn" onClick={handleDecrement}> - </button>
          <span className="qty-display">Quantity</span>
          <button className="qty-btn" onClick={handleIncrement}> + </button>
        </div>
      </div>

      <hr className="divider" />

      {/* DISPLAY SECTION: The exact summary block requested */}
      <div className="display-section">
        <p><strong>Product:</strong> Laptop</p>
        <p><strong>Price:</strong> ₹{price}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        
        <div className="total-amount">
          <strong>Total Amount:</strong> ₹{totalAmount}
        </div>
      </div>
    </div>
  );
}

export default ProductSelector;