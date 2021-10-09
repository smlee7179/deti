import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Link, Route } from "react-router-dom";
import "./assets/css/style.scss";

import MBTI from "./mbti";

const PreQuestion = () => {

    const [preqType, setPreqType] = useState('개발');

    const preqCheck = (e) => {
        e.persist();
        console.log(e.target.value)
        setPreqType(e.target.value)
    }

    return(
        <>

            <h1>관심 분야</h1>
            
            <label className="preq-label">
                <h3>웹/앱</h3>
                <input type="radio" name="preq" value="웹앱" onClick={preqCheck}/>    
            </label>
            
            <label className="preq-label">
                <h3>게임</h3>
                <input type="radio" name="preq" value="게임" onClick={preqCheck}/>    
            </label>
            
            <label className="preq-label">
                <h3>데이터</h3>
                <input type="radio" name="preq" value="데이터" onClick={preqCheck}/>    
            </label>
            
            <label className="preq-label">
                <h3>정보 보안</h3>
                <input type="radio" name="preq" value="정보보안" onClick={preqCheck}/>    
            </label>

            <label className="preq-label">
                <h3>사물 인터넷</h3>
                <input type="radio" name="preq" value="사물인터넷" onClick={preqCheck}/>    
            </label>

            <h1>
                <Link
                    to={{
                        pathname: '/mbti/question',
                        state: {
                            epValue: preqType
                        },
                    }}
                >테스트하기!</Link>
            </h1>

            {/* <h1 className="delete">강민지 존예!!!!!</h1> */}

        </>
    )

}

export default hot(module)(PreQuestion);