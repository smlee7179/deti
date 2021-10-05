import React, { useEffect} from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter, Router } from "react-router-dom";

import Header from "../base/header/header";
import Main from "../main/main";
import Footer from "../base/footer/footer";

const App = () => {
  const token = localStorage?.getItem('access_token');
  return (
    <>
      <Header token={token}></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default hot(module)(App);
