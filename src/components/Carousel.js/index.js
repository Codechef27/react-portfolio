
import React, {useState} from "react";
// import CarouselModal from "../CarouselModal.js/index ";
import gameReviews from "../../assets/images/carousel/game-reviews.png";
import theFrontYard from "../../assets/images/carousel/homepage-light.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import screenshot from '../../assets/images/carousel/Screenshot (19).png'

const Carousel = (images) => {
    const [recentWork] = useState ([

        {
            image: gameReviews,
            alt: 'game reviews'
        },
        {
            image: theFrontYard,
            alt: 'the front yard online store'
        },
        {
            image: screenshot,
            alt: 'screenshot '
        }
    ])

    const [currentImage, setCurrentImage] = useState(0)
    const length = recentWork.length;

    const nextImage = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1 );
    }

    console.log(currentImage);

    if(!Array.isArray(recentWork) || recentWork.length <= 0) {
        return null;
    }
    return (
        <section className="carousel">
        <FaArrowAltCircleLeft
          className="leftArrow"
            onClick={prevImage}
        />
        <FaArrowAltCircleRight 
        className="rightArrow" 
        onClick={nextImage} />
         {recentWork.map((image, index) => {
          return (
            <div
              className={index === currentImage ? "slide active" : "slide"}
              key={index}
            >
              {index === currentImage && (
                <img
                  className="image"
                  src={image.image}
                  alt={image.alt}
                />
              )}
            </div>
          );
        })}
        </section>
    )
        // <CarouselModal></CarouselModal>
   
   
}

export default Carousel;



