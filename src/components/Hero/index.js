
import React from 'react';
import  {FaArrowRight, FaArrowDown}  from "react-icons/fa";


const About = () => {

  return (
    <section id="Home" className="hero">
      <div className="oct">
        <div>
          <span className="hero-bg">
            <p>
              Hello, I'm <span> Bradley Kennett.</span>
            </p>
            <p>Full-stack web developer.</p>

            <a href="#Portfolio">
            
              <button
                className="btn-1"
              >
                Recent Projects
                <FaArrowRight className="arrowRight"></FaArrowRight>
                <FaArrowDown className="arrowDown"></FaArrowDown>
              </button>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About