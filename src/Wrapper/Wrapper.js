import React from "react";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";

function Wrapper({ children, title }) {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/");
  };
  return (
    <>
      <div className="wrapperHeader">
        <button
          className="btn "
          style={{ background: "none", border: "none" }}
          onClick={handleBackBtn}
        >
          <h2 style={{ textDecorationLine: "underline" }}>Back</h2>
        </button>
      </div>
      {children}
    </>
  );
}

export default Wrapper;
