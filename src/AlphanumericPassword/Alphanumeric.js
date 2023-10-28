import React from "react";
import "./Alphanumeric.css";
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
    <section className="alphanumeric">
      <div className="alphanumericContents">
        <h1 style={{ marginTop: "0" }}>Alphanumeric Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="alphanumericPassword">
            <label htmlFor="password" style={{ fontWeight: "600" }}>
              Enter Password :{" "}
            </label>
            <input
              className="alphanumericInput"
              type="text"
              placeholder="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
          </div>
          <button
            type="submit"
            disabled={input.length === 0}
            style={{ backgroundColor: "#c5d6fc" }}
          >
            Check
          </button>
        </form>
      </div>
      <h4 style={{ height: "2rem", color: "red" }}>{alert}</h4>
    </section>
  );
};

export default Alphanumeric;
