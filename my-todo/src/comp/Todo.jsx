import React, { useState } from "react";

const Todo = () => {
  const [newTodo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

 const [isCompleteed,setIsCompleteed] = useState(todo.isCompleted)

 const onDelete = () => {
    
 }
  const handalChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="outer">
      {" "}
      <h2 className="head">YOUR TODO APP</h2>
      <div>
        <input
          className="inpt1"
          value={newTodo}
          type="text"
          onChange={handalChange}
        />

        <button
          className="btn"
          onClick={() => {
            setTodos([
              ...todos,
              { value: newTodo, id: Date.now(), isComplete: false },
            ]);
            setTodo("");
          }}
        >
          +
        </button>
      </div>
      <br />
      <div>
        {todos.map((todo) => (
          <div  className="foot" key={todo.id}>
              
            <div  className="list">{todo.value}</div>
            <input type="checkbox" className="checkbox" checked={isCompleted} onChange={(e) => {
                 setIsCompleted(e.target.checked);
             }}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
