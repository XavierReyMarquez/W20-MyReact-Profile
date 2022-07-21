import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faLinkedin, faInstagram, faGithub);

const Footer = () => {
  return (
    <div>
      <ul className="social">
        <li key="linkedin">
          <a href="https://www.linkedin.com/in/xavier-marquez-242146230/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li key="instagram">
          <a href="https://www.instagram.com/xavierrmarquez/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li key="github">
          <a href="https://www.github.com/XavierReyMarquez">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
