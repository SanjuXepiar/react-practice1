import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Wrapper({ children, heading }) {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/");
  };
  return (
    <div className="wrapperContainer">
      <div className="appHeader">
        <button
          className="wrapperButton "
          style={{ background: "none", border: "none" }}
          onClick={handleBackBtn}
        >
          Back
        </button>

        <p className="wrapperHeading">{heading}</p>
      </div>

      {children}
    </div>
  );
}

export default Wrapper;
