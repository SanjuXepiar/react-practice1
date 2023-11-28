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
        <div className="inputs">
          <div className="inputsLabel">
            <label htmlFor="password">Password : </label>
          </div>
          <div className="inputsInput">
            <input
              type={show ? "text" : "password"}
              onChange={(e) => e.target.value}
            />
          </div>
          <button className="eyeButton" onClick={handleShowHide}>
            {show ? <BiSolidHide /> : <BiSolidShow />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowHide;
