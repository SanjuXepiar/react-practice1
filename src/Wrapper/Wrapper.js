import React from "react";
import { useNavigate } from "react-router-dom";

function Wrapper({ children }) {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={handleBackBtn}>Back</button>
      {children}
    </>
  );
}

export default Wrapper;
