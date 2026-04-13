import React, { useState } from 'react';

function App() {
  // 1. Create a state variable to hold the current color
  // We will set the starting color to "white"
  const [bgColor, setBgColor] = useState("white");

  // 2. The function that runs when the button is clicked
  const handleColorChange = () => {
    // If it is currently white, change it to lightblue. Otherwise, change it back to white!
    if (bgColor === "white") {
      setBgColor("lightblue");
    } else {
      setBgColor("white");
    }
  };

  return (
    // 3. We apply the state variable directly to the div's inline CSS style
    <div style={{ backgroundColor: bgColor, height: "300px", padding: "20px", border: "2px solid black", textAlign: "center" }}>
      
      <h2>The background color is: {bgColor}</h2>
      
      {/* 4. Attach the function to the onClick event */}
      <button onClick={handleColorChange} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Change Background Color
      </button>

    </div>
  );
}

export default App;
