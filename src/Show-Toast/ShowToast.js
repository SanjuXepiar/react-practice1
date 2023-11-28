import React from "react";
import "./Toast.css";
import { useToastContext } from "./ToastContext";
const ShowToast = () => {
  const { disable, hideToast } = useToastContext();
  return (
    <section className={` toast ${disable ? "hide" : "show "}`}>
      <h3 style={{ marginTop: "0" }}>This is the Toast component..</h3>
      <button onClick={hideToast}>Hide</button>
    </section>
  );
};

export default ShowToast;
