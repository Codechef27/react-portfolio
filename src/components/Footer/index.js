import React from "react";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";


const SocialLinks = () => {

    return (
      <footer>
        <div>
          <a href="https://github.com/Codechef27">
            <img className="git" src={githubIcon} alt="github icon" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/bradley-kennett-76a164158/">
            <img className="linkedin" src={linkedinIcon} alt="linkedin icon" />
          </a>
        </div>
      </footer>
    );
}

export default SocialLinks;