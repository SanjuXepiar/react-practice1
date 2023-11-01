import React from "react";
import ShowToast from "./ShowToast";
import { useToastContext } from "./ToastContext";
const Toast = () => {
  const { show, showToast } = useToastContext();

  return (
    <div className="toastComponent">
      <h1>........Toast .........</h1>

      <button className="btn" onClick={showToast}>
        {" "}
        ShowToast
      </button>
      <div className="toast">{show && <ShowToast />}</div>
    </div>
  );
};

export default Toast;
