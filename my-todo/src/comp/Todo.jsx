import React, { useState } from 'react'

const Todo = () => {
  
    const [value,setValue] = useState("");
    
    const [todos,setTodos] = useState([]) ; 

  return (
    <div>Todo APP
    
    <input value={value} onChange={(e) =>setValue(e.target.value)}/>
    <button onClick={()=> {setTodos([...todos,{value:value}]); setValue("") }} >+</button>
      
      {todos.map((todo)=>
              (<div>

                
                 <div> <input type="checkbox" /> {todo.value}  <button>Remove</button> </div>

              </div>)
        )}

    </div>
  )
}

export default Todo;