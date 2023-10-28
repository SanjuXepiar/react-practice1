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
      <div className="mainContainer">
        <h3>This is the Counter Project</h3>
        <div className="buttons">
          <button className="counterButton" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="counterButton" onClick={handleIncrement}>
            Increment
          </button>
        </div>
        <div className="count">
          <h3 className="counterLine">Counter : {count}</h3>
        </div>
      </div>
    </div>
  );
};

export default Counter;
