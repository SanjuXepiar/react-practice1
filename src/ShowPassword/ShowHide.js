import React from "react";
import "./ShowHide.css";
import { useState } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
const ShowHide = () => {
  const [show, setShow] = useState(false);
  //
  const handleShowHide = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className="showHide">
      <div className="showHideContent">
        <h1 style={{ marginTop: "0" }}>Show/Hide- Password</h1>
        <form className="showHideForm" onSubmit={handleShowHide}>
          <label htmlFor="password" style={{ fontWeight: "500" }}>
            Password :{" "}
          </label>
          <input
            type={show ? "text" : "password"}
            onChange={(e) => e.target.value}
          />
          <button type="submit" className="eyeButton">
            {show ? <BiSolidHide /> : <BiSolidShow />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShowHide;
