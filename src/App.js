import React, { Component } from "react";
import Home from "./components/Home/home";
import Menu from "./components/Menu/menu";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
        <About/>
        <Contact/>
      </div>
    );
  }
}

export default App;
