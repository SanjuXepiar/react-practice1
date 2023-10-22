import React from "react";

import { Link } from "react-router-dom";

const Tab3 = () => {
  return (
    <div className="tab3">
      <h3>This is Tab3 Component</h3>
      <Link to="/" className="backButton">
        Back
      </Link>
    </div>
  );
};

export default Tab3;
