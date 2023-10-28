import React from "react";
import "./Disable.css";
import { useState } from "react";

const Disable = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert("Password Matched refer console");
    console.log(input1);
    setTimeout(() => {
      setAlert("");
      setInput1("");
      setInput2("");
    }, 2000);
  };

  //
  return (
    <section className="disable">
      <p style={{ height: "1.2rem", color: "blue", fontWeight: "500" }}>
        {alert}
      </p>
      <div className="disablePasswordButton">
        <h1 className="disable-title">Password Disable</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="inputsLabel">
              <label htmlFor="password">Old Password :</label>
              <label htmlFor="password">Confirm Password :</label>
            </div>
            <div className="inputsInput">
              <input
                type="password"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <input
                type="password"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <button
        className="disable-button"
        type="submit"
        disabled={input1 !== input2}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default Disable;
