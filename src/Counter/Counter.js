import React from "react";
import "./Counter.css";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="main">
      <h3>This is the Counter Project</h3>
      <div className="buttons">
        <button className="counterButton" onClick={handleIncrement}>
          Increment
        </button>
        <button className="counterButton" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      <br />
      <div className="underline"></div>
      <div className="count">
        <h3 className="counterLine">Counter</h3>
        <p className="counter">{count}</p>
      </div>
    </div>
  );
};

export default Counter;
