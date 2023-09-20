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
    }, 2000);
  };

  //
  return (
    <div>
      <h1>Password Disable</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "40vw",
            background: "rgb(122, 122, 219)",
            margin: "0 auto",
            borderRadius: ".5rem",
          }}
        >
          <label htmlFor="password" style={{ marginRight: "4rem" }}>
            Old Password :
          </label>
          <input
            style={{ border: ".2rem solid blue", borderRadius: ".3rem" }}
            type="password"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <br />
          <label htmlFor="password" style={{ marginRight: "2rem" }}>
            Confirm Password :
          </label>
          <input
            style={{ border: ".2rem solid blue", borderRadius: ".3rem" }}
            type="password"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <br />
          <button
            style={{
              borderColor: "red",
              borderRadius: ".3rem",
              background: "grey",
            }}
            type="submit"
            disabled={input1 !== input2}
          >
            Submit
          </button>
          <p style={{ marginTop: ".5rem" }}>{alert}</p>
        </div>
      </form>
    </div>
  );
};

export default Disable;
