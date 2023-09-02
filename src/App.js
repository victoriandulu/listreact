import React,{useState} from 'react'
import './App.css';
function App() {
  const  [list,setList] = useState([]);
  const  [input,setInput] = useState("");
  
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list,newTodo]) ;
  setInput('');
 };
const deleteTodo = (id) =>{
  const newList = list.filter((todo) => todo.id !== id);

  setList(newList);
}

  return (
    <div className="form">
    <div className='head'>
      <h1>
        My Todo List
      </h1>
      </div>
      <div className='input'>
  <input
  
    type='text'
    value={input}
    placeholder='Enter Something'
    onChange={(e) => setInput(e.target.value)}
  />
  <button onClick={() => addTodo(input)}>Add</button>
</div>
<ul>
  {list.map((todo) =>(
    <li key={todo.id}> 
    {todo.todo}
  
    <button onClick={() =>deleteTodo(todo.id)}>delete</button>
    
    </li>))}
</ul>
    </div>
    
  )
}

export default App
 