
import { useState } from 'react';

/* A React component follows the three rules below
1. The first alphabet of the function must be UPPER-CASE
2. It must RETURN JSX
3. Usually, if the component in its own file, the file name and the function name must match

Props is an object, it receive data for the component in  a similar way like in experess (req.params)
The first argument for a component function is always props
*/

function MessageBox(props) {
  return <div style={
    {
    "border":"1px solid " + props.color
    }
  }>
    {props.message}
  </div>
}
 

function App() {
  const luckyNumber = Math.floor(Math.random() * 9000 + 999);

  // It s possible to have JavaScript expression in JSX
  // The expression will go between the {...}
  // The expression MUST evaluate to a value


// If it is possible to have a function that returns a value
// I can use it as part of {{}}
const sayHello = function(){
  return "Hello World"
}

// If it is possible to return any value from a function and JXK elements are just JavaScripts objects,
// then you can return JSX from functions
const showList = function(){
  return <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
}

   return (
   <>
   <h1>Your lucky number is {luckyNumber}</h1>
   <p>{sayHello()}</p>
   {showList()}
   <MessageBox message="The SMRT is down again" color="red"/>
   </>
  )
}

export default App;
