import React from "react";
import { Link } from "react-router-dom";

const Tab1 = () => {
  return (
    <div className="tab1">
      <h3>This is Tab1 Component</h3>
      <Link to="/" className="backButton">
        Back
      </Link>
    </div>
  );
};

export default Tab1;
