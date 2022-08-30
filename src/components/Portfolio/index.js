
import React, {useState} from "react";
import gameReviews from "../../assets/images/carousel/game-reviews.png";
import theFrontYard from "../../assets/images/carousel/the-fron-yard.png";
import techBlog from '../../assets/images/carousel/tech-blog-cms.png'
import photoPort from '../../assets/images/carousel/photo-port.png'
import foodFestival from '../../assets/images/carousel/food-festival.png'
import budgetTracker from '../../assets/images/carousel/budget-tracker.png'

const Portfolio = () => {
  const [recentWork] = useState([
    {
      image: gameReviews,
      title: "Game reviews",
      link: "https://codechef27.github.io/pc-game-reviews/",
      git: "https://github.com/Codechef27/pc-game-reviews",
      alt: "game reviews",
    },
    {
      image: theFrontYard,
      title: "The Front Yard",
      link: "https://the-front-yard.herokuapp.com/",
      git: "https://github.com/robsquaadd/the-front-yard",
      alt: "the front yard online store",
    },
    {
      image: techBlog,
      title: "Tech Blog CMS",
      link: "https://brads-tech-blog-cms.herokuapp.com/",
      git: "https://github.com/Codechef27/tech-blog-cms",
      alt: " tech blog ",
    },
    {
      image: photoPort,
      title: "Photographer Portfolio",
      link: "https://codechef27.github.io/photo-port/",
      git: "https://github.com/Codechef27/photo-port",
      alt: " photography portfolio ",
    },
    {
      image: foodFestival,
      title: "Food Festival App.",
      link: "https://codechef27.github.io/food-festival/index.html",
      git: "https://github.com/Codechef27/food-festival",
      alt: " food festival",
    },
    {
      image: budgetTracker,
      title: "Budget Tracker",
      link: "https://brads-pwa-budget-tracker.herokuapp.com/",
      git: "https://github.com/Codechef27/pwa-budget-tracker",
      alt: " budget tracker ",
    },
  ]);

  return (
    <section id="Portfolio" className="port container-fluid">
       <h2 className="portTitle">
          Recent Projects
          <div className="portTitle-border mx-auto my-2"></div>
        </h2>
      <div className="container">
        <div className="row mx-auto">
        {recentWork.map((photo, index) => {
          return (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 card my-1">
              <img className="cardImg" src={photo.image} alt={photo.alt} />
              <div className="card-body">
                <p className="card-title">{photo.title}</p>
                <div className="card-border mx-auto my-1"></div>
                <a href={photo.link}>
                  <button className="card-btn">Visit Site</button>
                </a>
                <a href={photo.git}>
                  <button className="card-btn">Visit Code</button>
                </a>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;