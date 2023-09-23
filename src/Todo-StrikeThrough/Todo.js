import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleTask = () => {
    const newTask = {
      taskName: input,
      id: Math.random(),
      strike: false,
      like: false,
    };
    setTodo([newTask, ...todo]);
    setInput("");
  };
  const handleStrike = (task) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === task.id) {
        return { ...task, strike: !task.strike };
      }
      return item;
    });
    setTodo(updatedTodo);
  };
  const handleLike = (task) => {
    const likeUpdate = todo.map((item) => {
      if (task.id === item.id) {
        return { ...task, like: !task.like };
      }
      return item;
    });
    setTodo(likeUpdate);
    console.log(task);
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
              <button
                style={{
                  border: "none",
                  color: task.like && "blue",
                  cursor: "pointer",
                  //   fontWeight: "500",
                }}
                onClick={() => handleLike(task)}
              >
                <BiSolidLike />
              </button>
              <div
                style={{
                  height: ".2rem",
                  width: "3vw",
                  margin: "auto",
                  borderRadius: "5rem",
                  background: "#ff0f9f",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
