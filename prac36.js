#App.css
/* App.css */
.standard-stylesheet-box {
  background-color: #ffe0b2; /* Light Orange */
  border: 2px solid #e65100;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
}

#App.module.css
/* App.module.css */
.moduleStyleBox {
  background-color: #e8f5e9; /* Light Green */
  border: 2px solid #1b5e20;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
}

#App.js
import React from 'react';

// 1. Importing the standard Stylesheet
import './App.css'; 

// 2. Importing the CSS Module (Notice we import it as an object named 'styles')
import styles from './App.module.css'; 

function App() {
  
  // 3. Inline CSS: We define the CSS as a JavaScript object
  // Notice we use camelCase (backgroundColor) instead of hyphens (background-color)
  const inlineStyleObject = {
    backgroundColor: '#e3f2fd', // Light Blue
    border: '2px solid #0d47a1',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    textAlign: 'center'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>React Styling Approaches</h2>

      {/* Approach 1: Standard Stylesheet */}
      {/* We use standard string text for the className */}
      <div className="standard-stylesheet-box">
        <h3>1. Standard Stylesheet</h3>
        <p>Uses a normal .css file. This style is global and can affect the whole app.</p>
      </div>

      {/* Approach 2: CSS Modules */}
      {/* We use curly braces and call the specific class from our 'styles' object */}
      <div className={styles.moduleStyleBox}>
        <h3>2. CSS Modules</h3>
        <p>Uses a .module.css file. This style is locked strictly to this component.</p>
      </div>

      {/* Approach 3: Inline CSS */}
      {/* We pass our JavaScript object directly to the style attribute */}
      <div style={inlineStyleObject}>
        <h3>3. Inline CSS</h3>
        <p>Written directly in the JavaScript file. Great for dynamic changes!</p>
      </div>

    </div>
  );
}

export default App;
