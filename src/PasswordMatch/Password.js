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
    <section className="passwordMatch">
      {input1 && (
        <p
          style={{
            height: "1rem",
            color: "red",
            fontWeight: "500",
          }}
        >
          {alert}
        </p>
      )}
      <form onSubmit={checkPassword}>
        <div className="passwordMatchContents">
          <h1 style={{ marginTop: "0" }}>Password Match</h1>
          <div className="inputs">
            <div className="inputsLabel">
              <label htmlFor="password">Password :</label>
              <label htmlFor="checkPassword">Confirm-Password : </label>
            </div>
            <div className="inputsInput">
              <input
                autoFocus
                type="password"
                value={input1}
                placeholder="password"
                autoComplete="off"
                onChange={(e) => setInput1(e.target.value)}
              />

              <input
                type="password"
                value={input2}
                placeholder="confirm password"
                autoComplete="off"
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn" style={{ marginTop: "1rem" }}>
            Check
          </button>
        </div>
      </form>
    </section>
  );
};

export default Password;
