import React from "react";
import ShowToast from "./ShowToast";
import { useState } from "react";
const Toast = () => {
  const [show, setShow] = useState(false);
  const showToast = () => {
    setShow(!show);
  };
  return (
    <div>
      <h1 style={{ marginBottom: "0" }}>........Toast .........</h1>
      <div
        style={{
          height: ".2rem",
          width: "30vw",
          margin: "auto",
          background: "red",
          marginBottom: "2rem",
        }}
      ></div>
      <button onClick={showToast}> {show ? "Hide-Toast" : "Show-Toast"}</button>
      <div>{show && <ShowToast />}</div>
    </div>
  );
};

export default Toast;
