import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>The links given below leads to my projects</h1>
      <section className="links">
        <Link to="/counter">
          <h4>Counter</h4>
        </Link>
        <Link to="/twitter">
          <h4>Twitter</h4>
        </Link>
        <Link to="/password">
          <h4>Password-Match</h4>
        </Link>
        <Link to="/alphanumeric">
          <h4>Alphanumeric-Password</h4>
        </Link>
        <Link to="/disable">
          <h4>Disable-Submit</h4>
        </Link>
        <Link to="/showhide">
          <h4>Show/Hide Password Button</h4>
        </Link>
      </section>
    </div>
  );
}

export default Home;
