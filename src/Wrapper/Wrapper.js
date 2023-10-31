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
        <h1 style={{ color: "blue", textAlign: "center" }}>{title}</h1>
        <button className="btn" style={{ background: "none", border: "none" }}>
          <Link to="/cart">
            {" "}
            <h2 style={{ textDecorationLine: "underline" }}>Go to Cart</h2>
          </Link>
        </button>
      </div>
      {children}
    </>
  );
}

export default Wrapper;
