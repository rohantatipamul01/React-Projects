import React from "react";
import {useState} from "react";
function App()
{
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask()
  {
    if(task.trim() !== "")
    {
      setTodos([...todos, task]);
      setTask("");
    }
  }
  
  function deleteTask()
  {
    setTodos([]);
  }

  function deleteTaskById(index)
  {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <>
      <h1>To Do Application</h1>

      <input type="text" placeholder="Enter your task" value={task} onChange={(e)=>setTask(e.target.value)}/>

      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}

      </ul>

      <button onClick={deleteTaskById(index)}>Delete</button>
      <button onClick={deleteTask}>Delete ALL</button>
    </>
  );
}

export default App;