import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/about.scss";

import Logo from './assets/img/project.png';

const About = () => {
  return (
    <section className="home_about">
      <div className="home_about-logo" style={{ backgroundImage: `url(${Logo})`, }}></div>
      <span className="material-icons expend_more">expand_more</span>
      
    </section>
  );
}

export default hot(module)(About);
