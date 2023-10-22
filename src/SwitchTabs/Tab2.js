import React from "react";

import { Link } from "react-router-dom";

const Tab2 = () => {
  return (
    <div className="tab2">
      <h3>This is Tab2 Component</h3>
      <Link to="/" className="backButton">
        Back
      </Link>
    </div>
  );
};

export default Tab2;
