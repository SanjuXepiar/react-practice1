import React from "react";
import { useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  //   const [strike, setStrike] = useState(false);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleTask = () => {
    const newTask = {
      taskName: input,
      id: Math.random(),
      strike: false,
    };
    setTodo([newTask, ...todo]);
    setInput("");
  };
  const handleStrike = (task) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === task.id) {
        return { ...task, strike: !task.strike };
      }
      //   console.log(item);
      //   console.log(item.strike);
      return item;
    });
    setTodo(updatedTodo);
  };
  //
  return (
    <div>
      <h1 style={{ marginBottom: "0" }}>Todo-Strike-Through</h1>
      <div
        style={{
          height: ".3rem",
          width: "30vw",
          margin: "auto",
          borderRadius: "5rem",
          background: "red",
        }}
      ></div>
      <div style={{ marginTop: "2rem" }}>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleTask}>AddTask</button>
      </div>
      <div>
        {todo.map((task) => {
          return (
            <div key={task.id}>
              <h3
                onClick={() => handleStrike(task)}
                style={{
                  cursor: "pointer",
                  textDecorationLine: task.strike && "line-through",
                }}
              >
                {task.taskName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
