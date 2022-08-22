import React from "react";
import stopWatch from '../../assets/images/stopwatch-icon.svg';
import lightBulb from '../../assets/images/light-bulb bw.svg';
import screen from '../../assets/images/screen-pc-smart-phone-.svg';
import cogwheels from '../../assets/images/two-settings-cogwheels.svg';


const AboutMe = () => {

  return (
    <section>
      <div id="About me" className="about-me-facts">
        <div className="main-title">
          <h2>About Me</h2>
        </div>
        <div className="fact">
          <div className="fact-info">
            <div className="fact-img">
              <img src={stopWatch} alt="stopwatch icon" />
            </div>
            <div className="fact-text">
              <h3>Quick</h3>
              <p>
                Fast load times and lag free interaction
                <br />
                is my top priority
              </p>
            </div>
          </div>
          <div className="fact-info">
            <div className="fact-img">
              <img src={lightBulb} alt="lightbulb icon" />
            </div>
            <div className="fact-text">
              <h3>Creative</h3>
              <p>
                I strive to create unique design layouts <br />
                for ease of use.
              </p>
            </div>
          </div>
          <div className="fact-info">
            <div className="fact-img">
              <img src={screen} alt="technology icons" />
            </div>
            <div className="fact-text">
              <h3> Responsive</h3>
              <p>
                My designs will scale to fit any
                <br />
                device big or small.
              </p>
            </div>
          </div>
          <div className="fact-info">
            <div className="fact-img">
              <img src={cogwheels} alt="cogwheel icons" />
            </div>
            <div className="fact-text">
              <h3>Dynamic</h3>
              <p>
                I have a strong dedication to making
                <br />
                websites come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
