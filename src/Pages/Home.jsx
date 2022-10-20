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
          <div className="categories">Marvel</div>
          <div className="categories">DC</div>
          <div className="categories">Disney</div>
          <div className="categories">Harry Potter</div>
          <div className="categories">Japoneses</div>
        </div>
      </div>
    );
  }
}

export default Home;
