import React from "react";

function Footer() {
  return (
    <section id="contacts">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
      <div id="links" class="linkscont">
        <a
          href="https://www.facebook.com/ana.ribeiro.543"
          class="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-square"></i> Facebook
        </a>
        <a
          id="links"
          href="https://github.com/ruipsmartins"
          class="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.instagram.com/lancheajantarado/"
          class="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a
          href="mailto:teste@gmail.com"
          class="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-at"></i> Enviar email
        </a>
        <a
          href="tel:912345678"
          class="linkscont"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-mobile-alt"></i> 912345678
        </a>
      </div>
    </section>
  );
}

export default Footer;
