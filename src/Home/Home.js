import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1 style={{ color: "orange" }}>React Practice</h1>
      <section className="project_tabs">
        <div className="project">
          <Link to="/counter">
            <h4>Counter</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/twitter">
            <h4>Twitter</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/password">
            <h4>Password-Match</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/alphanumeric">
            <h4>Alphanumeric-Password</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/disable">
            <h4>Disable-Submit</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/showhide">
            <h4>Show/Hide Password Button</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/addcart">
            <h4>Add To Cart</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/switchTab">
            <h4>SwitchTabs</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/toast">
            <h4>Toast</h4>
          </Link>
        </div>
        <div className="project">
          <Link to="/strikeThrough">
            <h4>Todo- StrikeThrough</h4>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
