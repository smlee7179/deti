import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticePage.scss';
import axios from 'axios';

//import data from './assets/data.json';

import NoticeBox from './components/NoticeBox';
import NoticeCreate from '../create/NoticeCreate';

function NoticePage({match}) {

  const [notice, setData] = useState([]);

  // let notice = data.notice;
  // console.log(notice)

  const testAPI = () => {
    const url = "http://3.35.43.53/api/v1/board/1";
    axios.get(url)
    .then((res) => {setData(res.data)
      console.log(res.data)
    })
    .catch(function(error) {
        console.log("실패");
    })
  }

  useEffect(() => {
    testAPI()		
  },[])

 


  return(
    <div>
      <div className="titleContainer">
        <h1 className="titleText">NOTICE</h1>
        <div className="addText"><span ><Link to={`${match.url}/create`}>추가</Link></span></div>
      </div >

      <div className="listContainer">
        {notice.map((c, i)=> {
          return(<NoticeBox key={i} content={c} match={match}/>)
        })}
      </div>

      <Switch>
        <Route path={`${match.url}/create`} component={NoticeCreate} />
      </Switch>
    
    </div>
  );
}

export default hot(module)(NoticePage);

