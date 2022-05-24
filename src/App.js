import Button from "./Button.js"
import { useState } from "react";
function App() {
  const [value,setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  return (
    <div>
      <h1>Welcome Back to React!2222</h1>
      <h2>{value}</h2>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
