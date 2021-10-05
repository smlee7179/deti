import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

const Header = ({token}) => {
  const history = useHistory();

  const [menuStyle, setMenuStyle] = useState({
    top: '',
    backgroundColor: '',
  });
  
  const logout = () => {
    localStorage.clear('access_token');
    history.push('/');
    location.reload();
  }
  
  const menuOpen = () => {
    setMenuStyle({
      top: '0px',
      backgroundColor: 'rgba(0, 0, 0, 0.144)',
      opacity: '100%',
    })
    // console.log('open');
  }

  const menuClose = () =>{
    setMenuStyle({top: '',})
  }

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        PROJECT
      </Link>
      <div className="header_nav-tab" onClick={menuOpen}><span className="material-icons">menu</span></div>
      <ul className="header_nav" style={menuStyle}>
        <div onClick={menuClose} className="nav-itm close">X</div>
        <Link to="/notice" className="nav-itm">공지</Link>
        <Link to="/activity" className="nav-itm">활동</Link>
        <Link to="/recruitment" className="nav-itm">모집</Link>
        <Link to="/mbti" className="nav-itm">MBTI</Link>
        {
          token?.length > 0 ?
            <span style={{cursor: "pointer"}} onClick={logout} className="nav-itm">로그아웃</span>
          :
           <Link to="/login" className="nav-itm">로그인</Link>
        }
      </ul>
    </header>
  );
  
};

export default hot(module)(Header);
