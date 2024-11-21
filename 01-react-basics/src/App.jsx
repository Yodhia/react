// React uses an alternative method t require for external modules
// We use import
// The line below is the same as const react = require ('react')
import React from 'react';
import './App.css'

// This is the starting point of all React application */
function App() {
  // The App function must always return JSX
  // RULES FOR JSX
  // 1. Only one top level element
  // - usually we use a React Fragment <>... </>
  // 2. No syntex error is allowed
  // 3. We cannot use `class` to attach a CSS class, we must use `className`
  return (<>
  <div className="container">
      <h1>Sakura Japanese Restaurant</h1>
      <h2> Any more authentic you will have to fly to Japan</h2>
      <p className = "leading"> We have the best autentic and freshest ingredients</p>
      </div>
    </>
  )
}

export default App;