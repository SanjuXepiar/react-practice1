import React from "react";
import "./Toast.css";
import { useState } from "react";
const ShowToast = () => {
  const [disable, setDisable] = useState(false);
  const hideToast = () => {
    setDisable(true);
  };
  return (
    <div className={disable ? "hide" : ""}>
      <h3>ToastComponent</h3>
      <button onClick={hideToast}>Hide</button>
    </div>
  );
};

export default ShowToast;
