import { useState, useEffect } from 'react';
function App(){
  const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //submit 버튼을 눌렀을때, refresh되는것을 막아준다.
    if (todo === ""){
      return; //todo값이 비어있으면 kill
    }
    setTodo(""); //add todo 버튼을 눌르고 나면 값을 초기화해준다.
    setTodos(currentArray => [todo, ...currentArray]); //currentArray -> 값이 추가되기 전 Todos => setTodos를 통해서 현재 입력값인 todo가 추가된다.
    
  };
  console.log(todos); 
  return (
    <div>
      <h1>My to-do {todos.length}</h1> {/* jsx문법을 통해 todo의 갯수를 보여줌 */}
      <form onSubmit={onSubmit}>
        <input  onChange={onChange} value={todo} type="text" placeholder='Write your todo'/>
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((item,index) => ( //map 함수의 첫 argument는 values, 두번째는 index값을 나타내는 숫자이므로, key값을 정하려면 unique한 값인 index값으로 정하는 것이 마땅하다.
          <li key={index}>{item}</li> //그냥 text였던 배열이 li로 둘러쌓여서 나오게 된다.
        ))}
      </ul>
    </div>
  );
};


export default App;