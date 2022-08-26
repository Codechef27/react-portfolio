
import React, {useState} from "react";
import {useSpring, animated } from 'react-spring'
import gameReviews from "../../assets/images/carousel/game-reviews.png";
import theFrontYard from "../../assets/images/carousel/the-fron-yard.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import techBlog from '../../assets/images/carousel/tech-blog-cms.png'
import photoPort from '../../assets/images/carousel/photo-port.png'
import foodFestival from '../../assets/images/carousel/food-festival.png'
import budgetTracker from '../../assets/images/carousel/budget-tracker.png'


const Carousel = ({ isModalOpen, setIsModalOpen }) => {
  const [recentWork] = useState([
    {
      image: gameReviews,
      title: "Game reviews",
      link: "https://codechef27.github.io/pc-game-reviews/",
      alt: "game reviews",
    },
    {
      image: theFrontYard,
      title: "The Front Yard Market Place",
      link: "https://the-front-yard.herokuapp.com/",
      alt: "the front yard online store",
    },
    {
      image: techBlog,
      title: "Tech Blog CMS",
      link: "https://brads-tech-blog-cms.herokuapp.com/",
      alt: " tech blog ",
    },
    {
      image: photoPort,
      title: "Photagrapher Portfolio",
      link: "https://codechef27.github.io/photo-port/",
      alt: " photography portfolio ",
    },
    {
      image: foodFestival,
      title: "Food Festival App.",
      link: "https://codechef27.github.io/food-festival/index.html",
      alt: " food festival",
    },
    {
      image: budgetTracker,
      title: "Budget Tracker",
      link: "https://brads-pwa-budget-tracker.herokuapp.com/",
      alt: " budget tracker ",
    },
  ]);


  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isModalOpen ? 1 : 0,
    tranform: isModalOpen ? "translateY(0%)" : "translateY(-100%)",
  });


  const [currentImage, setCurrentImage] = useState(0);
  const length = recentWork.length;

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(recentWork) || recentWork.length <= 0) {
    return null;
  }

  return (
    <>
      {isModalOpen ? (
        <div className="slider">
          <FaArrowAltCircleLeft className="leftArrow" onClick={prevImage} />
          <FaArrowAltCircleRight className="rightArrow" onClick={nextImage} />
          {recentWork.map((photo, index) => {
            return (
              <animated.div style={animation}>
                <div
                  className={
                    index === currentImage ? "card slide-active" : "slide"
                  }
                  key={index}
                >
                  {index === currentImage && (
                    <img
                      className="card-img-top"
                      src={photo.image}
                      alt={photo.alt}
                    />
                  )}
                  {index === currentImage && (
                    <div className="card-body">
                      <h4 className="card-title">{photo.title}</h4>
                      <div className="card-border mx-auto my-1"></div>
                      <a href={photo.link}>
                        <button className="card-btn">Check it out !</button>{" "}
                      </a>
                      <MdClose
                        className="closeModal"
                        aria-label="Close modal"
                        onClick={() => setIsModalOpen((prev) => !prev)}
                      />
                    </div>
                  )}
                </div>
              </animated.div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default Carousel;