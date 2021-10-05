import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

import Home from "../pages/home/home";

import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/auth/profile/Profile";
import Find from "../pages/auth/find/Find";


import Activity from '../pages/activity/main'
import NoticePage from '../pages/notice/noticemain/NoticePage';
import NoticeDetail from '../pages/notice/detail/NoticeDetail';
import NoticeCreate from '../pages/notice/create/NoticeCreate';

import MBTI from "../pages/mbti/mbti";
import Preq from "../pages/mbti/preq";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/activity" component={Activity}></Route>
        <Route exact path="/find" component={Find}></Route>
        <Route exact path="/notice" component={NoticePage} />
        <Route path="/notice/create" component={NoticeCreate} />
        <Route path="/notice/:id" component={NoticeDetail} />

        <Route path="/mbti" component={MBTI} />
        <Route path="/preq" component={Preq} />

      </Switch>
    </main>             
  )
}
export default hot(module)(Main);