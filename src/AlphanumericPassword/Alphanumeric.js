import React from "react";
import { useState } from "react";
const Alphanumeric = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState("");

  //
  // const isAlphanumeric = (char) => {
  //   return /[a-zA-Z0-9!@#$%^&*(),.?":{}|<>~`;'+_=/-]/.test(char);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < input.length; i++)
      // if (isAlphanumeric(input[i])) {
      if (!isNaN(input[i])) setAlert("The password is alphanumeric");
    //

    setTimeout(() => {
      setAlert("");
      setInput("");
    }, 2000);
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
          <h4 style={{ height: "2rem" }}>{alert}</h4>
        </div>
      </form>
    </div>
  );
};

export default Alphanumeric;
