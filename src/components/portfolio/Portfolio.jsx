import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <h3>This is portfolio item title</h3>
            <a href="#" className="btn">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
