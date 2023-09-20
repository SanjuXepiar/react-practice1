import React from "react";
import "./Twitter.css";
import { useState } from "react";

const Twitter = () => {
  const [alert, setAlert] = useState("");
  const [count, setCount] = useState("");
  const handleChange = (e) => {
    setCount(e.target.value);
    if (e.target.value.length >= 200) setAlert("Exced limit");
  };
  setTimeout(() => {
    setAlert("");
  }, 1500);

  return (
    <div className="twitter">
      <h3>This is the TextCounter Project</h3>
      {alert}
      <div>
        <textarea rows={8} cols={50} maxLength={200} onChange={handleChange} />
        {count.length}/200
      </div>
    </div>
  );
};

export default Twitter;
