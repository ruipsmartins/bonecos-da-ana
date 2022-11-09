import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class NavBar extends Component {
  render() {
    let mostrarLinks = () => {
      let x = document.getElementById("linksBox");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    };

    const options = ["one", "two", "three"];
    const defaultOption = options[0];

    return (
      <div className="bigBoxNav">
        <div className="navBar">
          <a className="icon" onClick={mostrarLinks}>
            <i id="burger" className="fa fa-bars"></i>
          </a>

          <Link id="siteName" to="/">
            Bonecos da Ana
          </Link>
        </div>
        <div id="linksBox">
          <Link onClick={mostrarLinks} id="navLink" to="/">
            Home
          </Link>
          <a
            onClick={mostrarLinks}
            id="navLink"
            href="javascript: document.body.scrollIntoView(true);"
          >
            Topo
          </a>
          <a
            onClick={mostrarLinks}
            id="navLink"
            href="javascript: document.body.scrollIntoView(false);"
          >
            Contactos
          </a>

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Categorias
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={mostrarLinks} href="#/marvel">
                Marvel
              </Dropdown.Item>
              <Dropdown.Item onClick={mostrarLinks} href="#/DC">
                DC
              </Dropdown.Item>
              <Dropdown.Item onClick={mostrarLinks} href="#/disney">
                Disney
              </Dropdown.Item>
              <Dropdown.Item onClick={mostrarLinks} href="#/harrypotter">
                Harry Potter
              </Dropdown.Item>
              <Dropdown.Item onClick={mostrarLinks} href="#/animes">
                Animes
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default NavBar;
