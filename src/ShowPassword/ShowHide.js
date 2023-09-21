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
    <div>
      <h1>Show/Hide- Password</h1>
      <form onSubmit={handleShowHide}>
        <div
          style={{
            width: "40vw",
            minHeight: "5rem",
            background: " rgb(122, 122, 219)",
            margin: "0 auto",
            border: ".2rem solid blue",
            borderRadius: ".3rem",
          }}
        >
          <label htmlFor="password" style={{ fontWeight: "500" }}>
            Password :{" "}
          </label>
          <input
            type={show ? "text" : "password"}
            onChange={(e) => e.target.value}
            style={{ marginTop: "2rem", padding: ".2rem" }}
          />
          <button
            type="submit"
            style={{
              marginLeft: "1rem",
              padding: "0 .5rem",
            }}
          >
            {show ? <BiSolidHide /> : <BiSolidShow />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShowHide;
