import React from "react";
import { useNavigate } from "react-router-dom";
import "./Twitter.css";
import { useState, useEffect } from "react";

const Twitter = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const [count, setCount] = useState("");
  const handleChange = (e) => {
    setCount(e.target.value);
    if (e.target.value.length >= 200) setAlert("Exceeded limit...");
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
      <p className="alertText"> {alert}</p>
      <div className="textArea">
        <textarea rows={6} cols={40} maxLength={200} onChange={handleChange} />
      </div>
      {count.length}/200
      <button className="backButton" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Twitter;
