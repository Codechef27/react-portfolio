
import React, {useState} from "react";
import gameReviews from "../../assets/images/carousel/game-reviews.png";
import oneSpark from "../../assets/images/carousel/one-spark.png";
import shopShop from '../../assets/images/carousel/shop-shop.png'
import bookSearch from '../../assets/images/carousel/booksearch.png'
import foodFestival from '../../assets/images/carousel/food-festival.png'
import budgetTracker from '../../assets/images/carousel/budget-tracker.png'

const Portfolio = () => {
  const [recentWork] = useState([
    {
      image: gameReviews,
      title: "Video Game Review",
      link: "https://codechef27.github.io/pc-game-reviews/",
      git: "https://github.com/Codechef27/pc-game-reviews",
      alt: "game reviews",
    },
    {
      image: oneSpark,
      title: "One Spark Memory Match",
      link: "https://one-spark-matching-game.herokuapp.com/",
      git: "https://github.com/Codechef27/one-spark",
      alt: "one spark gaming app",
    },
    {
      image: shopShop,
      title: "Shop Shop w/ Redux",
      link: "https://shop-shopp-redux.herokuapp.com/",
      git: "https://github.com/Codechef27/shop-shopp",
      alt: "shop shop ecommerce site",
    },
    {
      image: bookSearch,
      title: "Book Search App",
      link: "https://google-book-engine.herokuapp.com/",
      git: "https://github.com/Codechef27/google-book-engine",
      alt: " book search engine ",
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
      title: "Budget Tracker PWA",
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