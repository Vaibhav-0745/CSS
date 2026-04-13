import React from 'react';

function App() {
  // 1. Create an array of subjects
  const subjects = ["English", "Maths", "Physics", "Chemistry", "Computer Science"];

  return (
    <div style={{ margin: "30px", fontFamily: "sans-serif" }}>
      <h2>Semester Subjects</h2>
      
      {/* We use listStyleType: "none" to hide the default bullet points */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        
        {/* 2. map() provides the 'subject' name and its 'index' number */}
        {subjects.map((subject, index) => (
          
          // 3. We use the index as the 'key' to keep React happy!
          <li key={index} style={{ fontSize: "18px", padding: "5px" }}>
            
            {/* 4. We display index + 1 because arrays start counting at 0 */}
            <strong>{index + 1}.</strong> {subject}
            
          </li>
          
        ))}
        
      </ul>
    </div>
  );
}

export default App;
