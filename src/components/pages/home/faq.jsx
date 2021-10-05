import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import "./assets/css/faq.scss";

function faq({ question, answer }) {
  return (
    <div className="home_message">
      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">TEST dsadhds adjhsd gajfldagskfj hdsakjsajhg</p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">TEST</p>
        </div>
        <span>A</span>
      </div>
    </div>
  );
}

export default hot(module)(faq);
