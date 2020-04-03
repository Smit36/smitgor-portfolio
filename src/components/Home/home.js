import React, { Component } from "react";
import smit from "./smit.jpeg";
import facebookIcon from "./facebook.png";
import "./home.css";
import { FaFacebookF } from "react-icons/fa";
class Home extends Component {
  render() {
    return (
      <div className="Home">
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
              <div className="Facebook-Icon">
                 <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer" ><FaFacebookF color='white'/></a>
              </div>
              <div className="Facebook-Icon">
                 <a href='https://www.facebook.com' target='_blank ' rel="noopener noreferrer" ><FaFacebookF /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
