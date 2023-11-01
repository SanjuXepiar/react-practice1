import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Wrapper({ children, title }) {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/");
  };
  return (
    <>
      <div className="wrapperHeader">
        <button className="wrapperButton " onClick={handleBackBtn}>
          Back
        </button>
      </div>
      {children}
    </>
  );
}

export default Wrapper;
