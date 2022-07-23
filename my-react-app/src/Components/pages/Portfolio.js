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
function Portfolio(props) {
  console.log(props);
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {props &&
              props.projects.map(function (projects) {
                // const projectImage =
                //   require("../../assets/images/fortuneCardCookies" +
                //     projects.image).default;
                return (
                  <div key={projects.title} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={projects.url} title={projects.title}>
                        <img
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
