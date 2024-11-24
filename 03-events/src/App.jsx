import React, { useState } from 'react'
// useState is a react HOOK. A hook is a way to add new functionalit to a React component


const App= ()=> {

  // Create a state in React
  // A state is to remember if certain event has happened or to represent the current status of the component
  // Rule of thumb: as long as i tis something that affects how the component is displayed, it should be a state
  const [textColor,setTextColor] = useState("red");
  // useState("") -> return an array with 2 elements
  //                  1st element -> the current value of the state variable
  //                  2nd element -> a function to change the value of the state variable
  // the first parameter to useState is the default colour

  const [clickCount, setClickCount] = useState(0);

  
  // function handleClick(){
  //   alert("Hello World")
  // }
  // React prefers to use Arrow Functions when possible
  // 1. All arrow functions are anonymous functions
  //...it possible to assin it to a variable
  // 2. There is an arrow between the parameters and the braces
  // const handleClick = ()=>{
    // alert("Hello World")
  // }

  // 3. If your arrow function is only one line,you dont need the { }
  const handleClick = () => {
    if (textColor === "red") {
    // color = "blue" ==> WON'T WORK
    setTextColor("blue");
    } else {
      setTextColor("red");
    }
    setClickCount(clickCount + 1);
  }

  // 4. If your arrow function is only one and its returning something, you can ommit the return

  return (
    <>
    {/* The onClick must point to the NAME of the function or ANYTHING that is a function */ }
    <button onClick={handleClick}>Change Color</button>
      <div style={{
        "color": textColor
      }}>She sells seashell at the seashore</div>
      <div>You have clicked the buton {clickCount} times</div>
    </>
  )
}

export default App
