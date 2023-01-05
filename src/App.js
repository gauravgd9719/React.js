import React from "react";
import { useState } from "react";




 function App() {

  let [count, setCount] = useState(0)

  function plusCount () {
    setCount(count + 1)
  }

  function minusCount () {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>Increment Decrement Button</h1>
      <h2>{count}</h2>
      <button onClick={()=> plusCount() }>PLUS +</button>
      <button onClick={()=> minusCount()}> MINUS -</button>
    </div>
  );
}; 

export default App;
