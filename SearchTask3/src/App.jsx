import { useState } from "react";

function App()
{
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);

  const addTask=()=>{
    if(!task.trim()) return;
    setTodos([...todos, task]);
    setTask("");
  }

  const deleteTask=(index)=>{
    const newTodos=todos.filter((_,i)=>i!==index);
    setTodos(newTodos);
  }

  const searchTask=(searchTerm)=>{
    const filteredTodos=todos.filter((todo)=>todo.toLowerCase().includes(searchTerm.toLowerCase()));
    setTodos(filteredTodos);
  }

  return(
    <>
      <h1>To Do Application with Search</h1>

      <input type="text" placeholder="Search tasks" onChange={(e)=>searchTask(e.target.value)}/>
      
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>
            {todo}
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        )) }
      </ul>

      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter a task"/>
      <button onClick={addTask}>Add Task</button>



    </>
  );
}
export default App;