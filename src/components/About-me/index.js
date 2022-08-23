import React from "react";
import stopWatch from '../../assets/images/stopwatch-icon.svg';
import lightBulb from '../../assets/images/light-bulb bw.svg';
import screen from '../../assets/images/screen-pc-smart-phone-.svg';
import cogwheels from '../../assets/images/two-settings-cogwheels.svg';
import profileImg from '../../assets/images/portfolio-pic.jpg'


const AboutMe = () => {
  return (
    <section id="About me">
      <h2 className="about-title mx-auto">About Me</h2>
      <div className="fact-title-border mx-auto"></div>

      <div className="container">
        <section className="row mt-5 mb-2 facts">
          <div className="col fact-info">
            <div className="fact-img">
              <img src={stopWatch} alt="stopwatch icon" />
            </div>

            <div className=" fact-text">
              <h3 className="mx-auto">Quick</h3>
              <div className="fact-text-border mx-auto"></div>
              <p>
                Fast load times and lag free interaction
                <br />
                is my top priority
              </p>
            </div>
          </div>

          <div className="col fact-info">
            <div className="fact-img">
              <img src={lightBulb} alt="lightbulb icon" />
            </div>
            <div className="fact-text">
              <h3 className="mx-auto">Creative</h3>
              <div className="fact-text-border mx-auto"></div>
              <p>
                I strive to create unique design layouts <br />
                for ease of use.
              </p>
            </div>
          </div>

          <div className="col fact-info">
            <div className="fact-img">
              <img src={screen} alt="technology icons" />
            </div>
            <div className="fact-text">
              <h3> Responsive</h3>
              <div className="fact-text-border mx-auto"></div>
              <p>
                My designs will scale to fit any
                <br />
                device big or small.
              </p>
            </div>
          </div>

          <div className="col fact-info">
            <div className="fact-img">
              <img src={cogwheels} alt="cogwheel icons" />
            </div>
            <div className="fact-text">
              <h3>Dynamic</h3>
              <div className="fact-text-border mx-auto"></div>
              <p>
                I have a strong dedication to making
                <br />
                websites come to life.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container mt-5 bio">
        <h3>Contact</h3>
        <div className="bio-title-border mx-auto"></div>
        <address className="mt-3">
          <p>Have a question or want to email me? </p>
          <a href="mailto:bradleyjkennett@gmail.com">
            bradleyjkennett@gmail.com
          </a>
        </address>
        <img
          className="profile-pic my-2 mx-auto"
          src={profileImg}
          alt="profile"
        />
      </div>

      <div className="bio">
        <h4 className="mt-4">Who I Am ?</h4>
        <div className="bio-title-border mx-auto"></div>
        <p className=" container my-4 px-5">
          Full-stack web developer from the University of Central Florida.
          Proficient in Javascript, CSS, HTML, React and relational databases.
          Passionate about creating dynamic UI effects and
          animations. <br /> <br /> A unmatched work ethic and dediction to the
          job at hand are my best asset. I am striving to be apart of a cohesive team
          where I am learning, teaching and growing!
        </p>
      </div>
     </section>
  );
};

export default AboutMe;
