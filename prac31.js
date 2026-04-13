import React from 'react';

function App() {
  
  // 1. The function that receives the argument (theName)
  const sayHello = (theName) => {
    alert(`Hello, ${theName}!`);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Passing Arguments to a Function</h2>
      
      {/* 2. We use an arrow function () => to pass the argument safely */}
      <button onClick={() => sayHello("Vaibhav Satish Mendake")}>
        Greet Vaibhav
      </button>

      <br /><br />

      {/* Passing a different argument to the exact same function */}
      <button onClick={() => sayHello("Atharva Patil")}>
        Greet Atharva
      </button>
      
    </div>
  );
}

export default App;
