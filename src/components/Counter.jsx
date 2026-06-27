import React, { useState } from 'react';

function Counter() {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>Live Character Counter</h2>
      
      <textarea 
        rows="6" 
        cols="50" 
        placeholder="Type your text here..."
        value={text}
        onChange={(event) => setText(event.target.value)} 
      />
      
      <div style={{ marginTop: '10px' }}>
        <strong>Characters: {charCount}</strong>
        <br />
        <strong>Words: {wordCount}</strong>
      </div>
    </div>
  );
}

export default Counter;