import Button from "./Button.js"
import { useState,useEffect } from "react";
function App() {
  const [value,setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all time ");
  useEffect(()=>{
  console.log("Call the API!")
  }
  ,[]);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){ //if문을 통해서 맨처음에 아무것도 입력하지 않았을때, 실행되는 현상을 고침
    console.log("Search For" , keyword)};
  }, [keyword]); // keyword값이 변할때마다, useEffect안에 내용이 실행된다. -> []안에 들어간 값을 트랙킹한다.
  return (
    <div>
      <input value = {keyword} 
      onChange={onChange} 
      type = "text" 
      placeholder="Search Here.."
      />
      <h2>{value}</h2>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
