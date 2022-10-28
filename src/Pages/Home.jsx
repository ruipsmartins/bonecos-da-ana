import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="bigBox">
        <div className="trabalhosImg">
          <h1>por aqui uma imagem</h1>
          <Link to="/trabalhos">Trabalhos</Link>
        </div>
        <div className="categoriesBox">
          <a href="#/marvel" className="categories">
            <img
              className="categories"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
              alt="Marvel"
            />
          </a>

          <a href="#/DC" className="categories">
            <img
              className="categories"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
              alt="DC"
            />
          </a>

          <a href="" className="categories">
            <img
              className="categories"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg"
              alt="Disney"
            />
          </a>

          <a href="" className="categories">
            <img
              className="categories"
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Harry_Potter_wordmark_%28British%29.svg"
              alt="Harry Potter"
            />
          </a>
          <a href="" className="categories">
            <img
              className="categories"
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
              alt="Pokemon"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
