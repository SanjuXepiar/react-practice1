import React from "react";
import "./Alphanumeric.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Alphanumeric = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAlphabet = /[a-zA-z]/.test(input);
    const isNumber = /[0-9]/.test(input);
    if (isAlphabet && isNumber) {
      setAlert("The password is alphanumeric.");
    } else {
      setAlert("The Password isn't alphanumeric !");
    }

    setTimeout(() => {
      setAlert("");
    }, 2000);
    setInput("");
  };

  return (
    <>
      <div className="alphanumeric">
        <h1 style={{ textDecorationLine: "underline" }}>
          Alphanumeric Password
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="password">
            <label htmlFor="password">Enter Password : </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <br />
            <button
              type="submit"
              style={{ marginTop: "1.5rem", background: "#C5D6FC" }}
            >
              Check
            </button>
            <h4 style={{ height: "2rem", color: "red" }}>{alert}</h4>
          </div>
        </form>
      </div>

      <button className="backButton">
        <Link to="/">Back</Link>
      </button>
    </>
  );
};

export default Alphanumeric;
