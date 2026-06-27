import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('Blue');
  
  const colors = [
    'Red', 'Green', 'Blue', 'Yellow', 'Purple', 
    'Orange', 'Pink', 'Teal', 'Indigo', 'Cyan'
  ];

  return (
    <div className="card">
      <h2>Favorite Color Picker</h2>

      <div className="color-display">
        <strong>Selected Color:</strong> <span>{color}</span>
      </div>

      <div 
        className="color-box" 
        style={{ backgroundColor: color.toLowerCase() }}
      >
        <span className="color-name">{color}</span>
      </div>

      <div className="button-group">
        {colors.map((c) => (
          <button 
            key={c}
            className={`color-btn ${c.toLowerCase()}-btn`} 
            onClick={() => setColor(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;