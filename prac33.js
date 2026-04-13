import React, { useState } from 'react';

function App() {
  // 1. Create a state variable to remember what the user types
  // It starts as an empty string ""
  const [inputText, setInputText] = useState("");

  return (
    <div style={{ margin: "30px", fontFamily: "sans-serif" }}>
      <h2>React User Input Manager</h2>
      
      {/* 2. The Input Box */}
      <label>Type something: </label>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Start typing..."
        style={{ padding: "5px", fontSize: "16px" }}
      />

      {/* 3. Displaying the input instantly */}
      <h3 style={{ color: "blue" }}>
        You are typing: {inputText}
      </h3>
      
    </div>
  );
}

export default App;
