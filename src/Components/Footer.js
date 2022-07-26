import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

library.add(fab, faLinkedin, faInstagram, faGithub);

const styles = {
  footer: {
    color: "black",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    background: "",
    position: "relative",
    bottom: 0,
    width: "100%",
  },

  icons: {
    fontSize: "50px",
  },
};

const Footer = () => {
  return (
    <div>
      <ul style={styles.footer} className="social">
        <li style={styles.icons} key="linkedin">
          <a
            className="social"
            href="https://www.linkedin.com/in/xavier-marquez-242146230/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li style={styles.icons} key="instagram">
          <a
            className="social"
            href="https://www.instagram.com/xavierrmarquez/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li style={styles.icons} key="github">
          <a className="social" href="https://www.github.com/XavierReyMarquez">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
