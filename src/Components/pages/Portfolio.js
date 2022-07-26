import React from "react";
import imgCookie from "../../assets/images/fortuneCardCookies.PNG";
import imgExpress from "../../assets/images/Notetaker.PNG";
import imgCommerce from "../../assets/images/ECommerce.gif";
import imgRead from "../../assets/images/ReadMe.png";
import imgTracker from "../../assets/images/Tracker.png";
import imgTeam from "../../assets/images/Team.png";
import "../../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub);

const imgobj = {
  imgCookie,
  imgExpress,
  imgCommerce,
  imgRead,
  imgTracker,
  imgTeam,
};

const styles = {
  imgStyle: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },

  portfolioStlye: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    padding: "10px",
    justifyContent: "space-between",
  },

  divStyle: {
    width: "50%",
    position: "relative",
  },

  // overlayStyle: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   color: "white",
  //   background: "#380036",
  //   fontFamily: "QuickSand, sans-serif",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   opacity: 0.25,
  // },

  titleStyle: {
    fontSize: "2em",
    fontWeight: "bold",
  },

  descriptionStyle: {
    fontSize: "1.25em",
    marginTop: ".25em",
  },

  h1style: {
    textAlign: "center",
    color: "white",
  },

  icons: {
    position: "absolute",
    fontSize: "50px",
  },
};

function Portfolio(props) {
  console.log(props);
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={styles.h1style}>Check Out Some of My Works.</h1>

          <div
            style={styles.portfolioStlye}
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {props &&
              props.projects.map(function (projects) {
                return (
                  <div
                    style={styles.divStyle}
                    key={projects.title}
                    className="Portfolio-image"
                  >
                    <img
                      style={styles.imgStyle}
                      alt={projects.title}
                      src={imgobj[projects.image]}
                    />
                    <div
                      className="Project-overlay Project-overlay-blur"
                      style={styles.overlayStyle}
                    >
                      <a href={projects.url} title={projects.title}>
                        <h5 style={styles.titleStyle}>{projects.title}</h5>
                        <p style={styles.descriptionStyle}>
                          {projects.category}
                        </p>
                        <a
                          style={styles.icons}
                          href="https://www.github.com/XavierReyMarquez"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
