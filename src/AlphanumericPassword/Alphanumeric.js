import React from "react";
import { useState } from "react";
const Alphanumeric = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAlphabet = /[a-zA-z]/.test(input);
    const isNumber = /[0-9]/.test(input);
    if (isAlphabet && isNumber) {
      setAlert("The password is alphanumeric");
    } else {
      setAlert("The Password isn't alphanumeric");
    }

    setTimeout(() => {
      setAlert("");
    }, 2000);
    setInput("");
  };

  return (
    <div>
      <h1>Alphanumeric Password</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "40vw",
            background: "blue",
            margin: "0 auto",
            borderRadius: ".5rem",
          }}
        >
          <label htmlFor="password">Enter Password : </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <br />
          <button type="submit" style={{ marginTop: "1rem" }}>
            Check
          </button>
          <h4 style={{ height: "2rem", color: "orange" }}>{alert}</h4>
        </div>
      </form>
    </div>
  );
};

export default Alphanumeric;
