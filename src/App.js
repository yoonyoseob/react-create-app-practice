import Button from "./Button.js"
import { useState,useEffect } from "react";
function App() {
  const [value,setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  console.log("i run all time ");
  const iRunOnlyOnce = () =>{
    console.log('only one time');
  };
  useEffect(()=>{
  console.log("Call the API!")
  }
  ,[]);
  return (
    
    

    <div>
      <h1>Welcome Back to React!</h1>
      <h2>{value}</h2>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
