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
    <div className="counter">
      <div className="mainContainer">
        <h3>This is the Counter Project</h3>
        <div className="countButtons">
          <button className="btn" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="btn" onClick={handleIncrement}>
            Increment
          </button>
        </div>
        <div className="count">
          <h3 className="counterLine">Count : {count}</h3>
        </div>
      </div>
    </div>
  );
};

export default Counter;
