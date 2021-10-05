import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeDetail.scss';

import testImg from '../noticemain/assets/noticeImage.png';


export default function NoticeDetail({location}) {

  let data = location.state;

  const file = 'http://3.35.43.53' + `${data.thumbnail}`
  let create_date = (data.created_date).substring(0,10);

  return(
    <div className="container">

      <div className="listBack_container">
        <div>=</div>
        <Link to="/notice" className="nav-itm">목록</Link>
      </div>

      <div className="modifyContainer">
        <div>수정</div>
        <div>삭제</div>
      </div>
        

      <div className="contentContainer">
        <div className="imageContainer">
          <img src={file}/>
        </div>

        <div className="textContainer">
          <h1>{data.title}</h1>

          <div>작성자 {data.creator}</div>
          <div>작성일 {data.create_date}</div>
          
          <div>{data.content}</div>
        </div>

      </div>
      
          
    </div>
  );
}