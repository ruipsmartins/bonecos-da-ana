import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <header className="NavBar-header">
          <Link to="/">Bonecos da Ana link Home</Link>
        </header>
      </div>
    );
  }
}

export default NavBar;
