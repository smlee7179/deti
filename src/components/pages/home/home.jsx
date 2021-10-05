import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/style.scss";

import About from "./about";
import Project from "./project";
import Contact from "./contact";
import Faq from "./faq";

function Home() {
  //SNS 연동은 Client ID 발급 받으면 생성 예정
  return (
    <div className="home">

      <About></About>
      <Project></Project>
      <Faq></Faq>
      <Contact></Contact>

    </div>
  );
}

export default hot(module)(Home);
