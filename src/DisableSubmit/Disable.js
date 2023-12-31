import React from "react";
import "./Disable.css";
import { useState } from "react";

const Disable = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert("Password Matched");
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
        {input1.length !== 0 && alert}
      </p>
      <div className="disablePasswordButton">
        <h1 className="disable-title">Password Disable</h1>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <div className="inputs">
            <div className="inputsLabel">
              <label htmlFor="password">Old Password :</label>
              <label htmlFor="password">Confirm Password :</label>
            </div>
            <div className="inputsInput">
              <input
                type="password"
                autoFocus
                value={input1}
                className="input"
                onChange={(e) => setInput1(e.target.value)}
              />
              <input
                type="password"
                value={input2}
                className="input"
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
          </div>
          <button
            className=" btn"
            style={{ marginTop: "1rem" }}
            type="submit"
            disabled={input1 !== input2}
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Disable;
