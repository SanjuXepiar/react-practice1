import React, { useState, createContext, useContext } from "react";
const ToastContext = createContext();
export const ToastContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const showToast = () => {
    setShow(true);
    setDisable(false);
  };
  const hideToast = () => {
    setDisable(true);
    setShow(false);
  };
  return (
    <>
      <ToastContext.Provider value={{ show, showToast, disable, hideToast }}>
        {children}
      </ToastContext.Provider>
    </>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
