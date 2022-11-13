import React from "react";

function Footer() {
  return (
    <section id="contacts">
      <div id="links" className="linkscont">
        <a
          href="https://www.facebook.com/ana.ribeiro.543"
          className="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square"></i> Facebook
        </a>

        <a
          href="https://www.instagram.com/handmade_and_shine/"
          className="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          id="links"
          href="https://github.com/ruipsmartins"
          className="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="mailto:teste@gmail.com"
          className="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-at"></i> Enviar email
        </a>
        <a
          href="tel:910000000"
          className="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-mobile-alt"></i> 910000000
        </a>
      </div>
    </section>
  );
}

export default Footer;
