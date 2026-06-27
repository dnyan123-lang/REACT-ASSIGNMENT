import React, { useState } from 'react';

const Greeting = () => {
  // Added empty quotes to initialize the state as a string
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState(''); // Fixed the typo here

  function handleSubmit() {
    setMessage(`Hello ${userName}`);
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter your name..."
        onChange={(e) => setUserName(e.target.value)}  
      />
      
      {/* Simplified the onClick handler */}
      <button onClick={handleSubmit}>Submit</button>
      
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        {message}
      </div>
    </>
  );
};

export default Greeting;