
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount] = useState(0);

  function increseCount(){
       setCount(count+1);
  }

  return (
    <div>
       <p>Button clicked {count} times</p>
       <button onClick={increseCount}>Click Me</button>
    </div>
  )
}

export default App
