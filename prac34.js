import React from 'react';

function App() {
  // 1. Create a simple array of student names
  const students = ["Vaibhav Satish Mendake", "Atharva Patil", "Rahul Verma", "Priya Desai"];

  return (
    <div style={{ margin: "30px", fontFamily: "sans-serif" }}>
      <h2>College Student List</h2>
      
      {/* 2. Use .map() to loop through the array and display them */}
      <ul>
        {students.map((studentName) => (
          <li>{studentName}</li> 
        ))}
      </ul>
      
    </div>
  );
}

export default App;
