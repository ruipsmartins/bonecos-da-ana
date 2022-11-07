import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="bigBox">
        <div className="navBar">
          <Link id="siteName" to="/">
            Bonecos da Ana
          </Link>
          <div>
            <a
              className="navLink"
              href="javascript: document.body.scrollIntoView(true);"
            >
              Home
            </a>

            <a
              className="navLink"
              href="javascript: document.body.scrollIntoView(false);"
            >
              Contactos
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
