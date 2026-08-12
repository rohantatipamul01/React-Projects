import { useState } from 'react';
function App()
{
  const [count,setCount]=useState(0);

  const handleIncrement=()=>{
    setCount(count + 1);
  }

  const handleDecrement=()=>{ 
    if(count>0)
    {
      setCount(count - 1);
    }
  }
  return (
    <>
        <h1>Counter App</h1>
        <button onClick={handleIncrement} style={{width: '100px'}}>Increment</button>
        <button onClick={handleDecrement} style={{width: '100px'}}>Decrement</button>
        <p>Count: {count}</p>

    </>
  );
}

export default App;