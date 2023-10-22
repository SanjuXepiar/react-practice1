import React from "react";
import "./Toast.css";
import { useState } from "react";
const ShowToast = () => {
  const [disable, setDisable] = useState(false);
  const hideToast = () => {
    setDisable(true);
  };
  return (
    <section className={`default ${disable ? "hide" : " "}`}>
      <h3 style={{ marginTop: "0" }}>ToastComponent</h3>
      <button onClick={hideToast}>Hide</button>
    </section>
  );
};

export default ShowToast;
