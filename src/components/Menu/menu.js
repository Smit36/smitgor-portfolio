import React, { Component } from "react";

import './menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-Option">
          <div className="Home-Link">Home</div>
          <div className="About-Link">About</div>
          <div className="Resume-Link">Resume</div>
          <div className="Projects-Link">Projects</div>
          <div className="Contact-Link">Contact</div>
        </div>
      </div>
    );
  }
}

export default Menu;
