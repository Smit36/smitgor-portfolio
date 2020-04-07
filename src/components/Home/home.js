import React, { Component } from "react";
import smit from "./smit.jpeg";

import "./home.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <link
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          rel="stylesheet"
        />

        <div className="Home-Header">
          <div className="Home-Design"></div>
          <div className="Home-Image">
            <img src={smit} alt="mypic" />
          </div>
          <div className="Home-Header-Name">
            I'm Smit D. Gor
            <div className="Home-Header-Profile">
              <div className="Home-Header-Profile-1">Web Developer</div>
              <div className="Home-Header-Profile-2">Data Analyst</div>
            </div>
            <div className="Home-Header-Icon">
              <a
                className="facebook-icon"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="linkedin-icon"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="github-icon"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                className="instagram-icon"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                className="twitter-icon"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div className="Arrow">
              <a className='arrow-down' href='.About'>
                <i class="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
