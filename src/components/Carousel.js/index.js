
import React, {useState} from "react";
import gameReviews from "../../assets/images/carousel/game-reviews.png";
import theFrontYard from "../../assets/images/carousel/homepage-light.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// import screenshot from '../../assets/images/carousel/Screenshot (19).png'

const Carousel = ({ isModalOpen, setIsModalOpen } ) => {
    const [recentWork] = useState ([

        {
            image: gameReviews,
            title: "Game reviews",
            link: 'https://codechef27.github.io/pc-game-reviews/',
            alt: 'game reviews' 
        },
        {
            image: theFrontYard,
            title: 'The Front Yard Market Place',
            link: 'https://the-front-yard.herokuapp.com/',
            alt: 'the front yard online store'
        },
        // {
        //     image: screenshot,
        //     alt: 'screenshot '
        // }
    ])
    const {title, link } = recentWork.length;
    const [currentImage, setCurrentImage] = useState(0)
    const length = recentWork.length;

    const nextImage = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1 );
    }

    if(!Array.isArray(recentWork) || recentWork.length <= 0) {
        return null;
    } 
        return (
            <>
            {isModalOpen ? (
                <div className="container modalBackdrop">
                <FaArrowAltCircleLeft className="leftArrow" onClick={prevImage} />
                <FaArrowAltCircleRight className="rightArrow" onClick={nextImage} />
                {recentWork.map((image, index) => {
                  return ( 
                    <div
                      className={index === currentImage ? "slide active" : "slide"}
                      key={index}
                    > 
                      {index === currentImage && (
                        <img 
                          className="modalContainer"
                          src={image.image}
                          alt={image.alt} 
                        />
                      )} 
                      <div>
                            <h3 className="imageTitle">{title}</h3>
                        </div> 
                        <div>
                            <a href={link}><button> Visit </button></a>

                        </div>    
                    </div>
                  );
                })}
               </div>
            ) : null }
           
           </> 
         );
    
   
}

export default Carousel;



