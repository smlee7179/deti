import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/NoticeBox.scss'

import NoticeDetail from '../../detail/NoticeDetail';

//import file from '../assets/noticeImage.png';


export default function NoticeBox({content, match}) {

  const file = 'http://3.35.43.53' + `${content.thumbnail}`
  let create_date = (content.created_date).substring(0,10);

  return(
    <Link to={{ pathname: `${match.url}/${content.id}`, state: content }} className="linkStyle">
    <li className="listStyle">
      
      {/* <div>
        <div style={{padding:5, textAlign:'center'}}>
          <div className="noticeText" style={{fontSize:'15pt', fontWeight:'500'}} >{content.title}</div>
          <div className="noticeText" >작성자: {content.creator}</div>
          <img src={file} style={{width:100, height:100, marginTop:10}}/>

          <div className="noticeText" >view: 0</div>
          <div className="noticeText" style={{fontSize:12}}>{create_date}</div>
          
        </div>
      </div> */}

      <div>
        <div style={{padding:5, textAlign:'center'}}>
          <div className="noticeText" style={{fontSize:'15pt', fontWeight:'500'}} >{content.title}</div>
          <div className="noticeText" >작성자: {content.creator}</div>
          <img src={file} style={{width:100, height:100, marginTop:10}}/>

          <div className="noticeText" >view: 0</div>
          <div className="noticeText" style={{fontSize:12}}>{create_date}</div>
          
        </div>
      </div>
      
      <Switch>
        <Route path={`${match.url}/:id`} component={NoticeDetail}/>
      </Switch>
    </li>
    </Link>
  );
  
}