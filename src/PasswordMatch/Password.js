import React from "react";
import { useNavigate } from "react-router-dom";
import "./Password.css";
import { useState } from "react";
const Password = () => {
  const navigate = useNavigate();
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
    <>
      <form onSubmit={checkPassword}>
        <div className="passwordMatch">
          <h1 style={{ textDecorationLine: "underline" }}>Password Match</h1>
          <div className="inputs">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              value={input1}
              autoComplete="off"
              onChange={(e) => setInput1(e.target.value)}
            />

            <br />
            <br />

            <label htmlFor="checkPassword">Confirm-Password : </label>

            <input
              type="password"
              value={input2}
              autoComplete="off"
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
          <p style={{ height: "1rem", color: "red", fontWeight: "500" }}>
            {input1 && alert}
          </p>
        </div>
      </form>
      <button className="backButton" onClick={() => navigate("/")}>
        Back
      </button>
    </>
  );
};

export default Password;
