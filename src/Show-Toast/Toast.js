import React from "react";
import ShowToast from "./ShowToast";
import { useState } from "react";
const Toast = () => {
  const [show, setShow] = useState(false);
  const showToast = () => {
    setShow(true);
  };

  return (
    <div className="toastComponent">
      <h1>........Toast .........</h1>

      <button onClick={showToast}> ShowToast</button>
      <div className="toast">{show && <ShowToast />}</div>
    </div>
  );
};

export default Toast;
