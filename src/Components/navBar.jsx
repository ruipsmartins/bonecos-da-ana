import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="bigBox">
        <div className="NavBar">
          <Link id="siteName" to="/">
            Bonecos da Ana
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
