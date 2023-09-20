import React from "react";
import "./Password.css";
import { useState } from "react";
const Password = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [alert, setAlert] = useState("");

  const checkPassword = (e) => {
    e.preventDefault();

    if (input1 !== input2) {
      setAlert("Password didn't Match");
    } else {
      setAlert("Password  Matched");
    }
    setTimeout(() => {
      setAlert("");
      setInput1("");
      setInput2("");
    }, 2000);
  };

  return (
    <form onSubmit={checkPassword}>
      <div className="passwordMatch">
        <h1>Password Match</h1>

        <div className="inputs">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <br />
          <label htmlFor="checkPassword">Check-Password:</label>

          <input
            type="password"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <br />
          <button
            type="submit"
            style={{ cursor: "pointer", marginTop: "1rem" }}
          >
            Check
          </button>
        </div>
        <br />
        <p style={{ height: "2rem" }}>{input1 && alert}</p>
      </div>
    </form>
  );
};

export default Password;
