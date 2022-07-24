import React from "react";
import imgCookie from "../../assets/images/fortuneCardCookies.PNG";
import imgExpress from "../../assets/images/Notetaker.PNG";
import imgCommerce from "../../assets/images/ECommerce.gif";
import imgRead from "../../assets/images/ReadMe.png";
import imgTracker from "../../assets/images/Tracker.png";
import imgTeam from "../../assets/images/Team.png";

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
    width: "50%",
  },

  portfolioStlye: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  },

  divStyle: {
    fontSize: "25px",
    width: "50%",
    textAlign: "center",
  },

  h1style: {
    textAlign: "center",
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
                // const projectImage =
                //   require("../../assets/images/fortuneCardCookies" +
                //     projects.image).default;
                return (
                  <div
                    style={styles.divStyle}
                    key={projects.title}
                    className="columns portfolio-item"
                  >
                    <div className="item-wrap">
                      <a href={projects.url} title={projects.title}>
                        <img
                          style={styles.imgStyle}
                          alt={projects.title}
                          src={imgobj[projects.image]}
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{projects.title}</h5>
                            <p>{projects.category}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="fa fa-link"></i>
                        </div>
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
