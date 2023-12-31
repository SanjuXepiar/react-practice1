import React from "react";
import "./Twitter.css";
import { useState, useEffect } from "react";

const Twitter = () => {
  const [alert, setAlert] = useState("");
  const [count, setCount] = useState("");
  const handleChange = (e) => {
    setCount(e.target.value);
    if (e.target.value.length >= 200) setAlert("Exceeded letter limit...");
  };
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  }, [alert]);

  return (
    <div className="twitter">
      <h1 style={{ textDecorationLine: "underline" }}>Description box</h1>
      {alert && <p className="alertText">{alert}</p>}
      <div className="twitterBody">
        <div className="twitterTextArea">
          <textarea
            rows={8}
            cols={40}
            maxLength={200}
            onChange={handleChange}
          />
        </div>
        {count.length}/200
      </div>
    </div>
  );
};

export default Twitter;
