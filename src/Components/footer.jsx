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
        <a href="https://www.facebook.com/ana.ribeiro.543" class="linkscont">
          <i class="fab fa-facebook-square"></i> Facebook
        </a>
        <a id="links" href="https://github.com/ruipsmartins" class="linkscont">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://twitter.com/freecodecamp" class="linkscont">
          <i class="fab fa-twitter"></i> Twitter
        </a>
        <a href="mailto:test@gmail.com" class="linkscont">
          <i class="fas fa-at"></i> Enviar email
        </a>
        <a href="tel:911111111" class="linkscont">
          <i class="fas fa-mobile-alt"></i> 911111111
        </a>
      </div>
    </section>
  );
}

export default Footer;
