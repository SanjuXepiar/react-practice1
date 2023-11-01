import React from "react";
import "./Todo.css";
import { BiSolidLike, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [inEdit, setInEdit] = useState("");
  //
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todo"));
    if (stored?.length) {
      setTodo(stored);
    }
  }, []);

  const handleAdd = () => {
    const newTask = {
      taskName: input,
      id: Math.random(),
      strike: false,
      like: false,
    };
    setTodo([newTask, ...todo]);

    //
    localStorage.setItem("todo", JSON.stringify([newTask, ...todo]));

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
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };
  const handleLike = (task) => {
    const likeUpdate = todo.map((item) => {
      if (task.id === item.id) {
        return { ...task, like: !task.like };
      }
      return item;
    });
    setTodo(likeUpdate);
    localStorage.setItem("todo", JSON.stringify(likeUpdate));
  };
  const handleDelete = (task) => {
    const deleteUpdate = todo.filter((item) => item.id !== task.id);
    setTodo(deleteUpdate);
    localStorage.setItem("todo", JSON.stringify(deleteUpdate));
  };
  const handleEdit = (task) => {
    setInEdit(task);
    setInput(task.taskName);
  };
  const updateEdit = () => {
    const updatedEdit = todo.map((item) => {
      if (item.id === inEdit.id) {
        return {
          ...item,
          taskName: input,
        };
      }
      return item;
    });
    setTodo(updatedEdit);
    localStorage.setItem("todo", JSON.stringify(updatedEdit));
    setInput("");
    setInEdit("");
  };
  //
  return (
    <div className="todoStrikeThrough">
      <h1 style={{ textDecorationLine: "underline" }}>Todo-Strike-Through</h1>

      <div className="todoInputActions">
        <input
          className="inputsInput"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={inEdit ? updateEdit : handleAdd}>
          {inEdit ? "Edit-Item" : "Add-Item"}
        </button>
      </div>

      <div className="todoBody">
        {todo.map((task) => {
          return (
            todo.length !== 0 &&
            task.taskName && (
              <div key={task.id} className="todoList">
                <div className="todoList-Task">
                  <h3
                    onClick={() => handleStrike(task)}
                    style={{
                      cursor: "pointer",
                      textDecorationLine: task.strike && "line-through",
                      color: task.strike ? "blue" : "red ",
                      margin: "0.5rem",
                    }}
                  >
                    {task.taskName}
                  </h3>
                </div>
                <div className="todoList-Icons">
                  {task.taskName && (
                    <BiSolidLike
                      style={{
                        width: "1.5rem",
                        height: "1.2rem",
                        cursor: "pointer",
                        color: task.like && "blue",
                      }}
                      onClick={() => handleLike(task)}
                    />
                  )}

                  {task.taskName && (
                    <MdDelete
                      style={{
                        width: "1.5rem",
                        height: "1.2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(task)}
                    />
                  )}

                  {task.taskName && (
                    <BiEdit
                      style={{
                        width: "1.5rem",
                        height: "1.2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleEdit(task)}
                    />
                  )}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
