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
                <h3>개발</h3>
                <input type="radio" name="preq" value="개발" onClick={preqCheck}/>    
            </label>
            
            <label className="preq-label">
                <h3>연구</h3>
                <input type="radio" name="preq" value="연구" onClick={preqCheck}/>    
            </label>
            
            <label className="preq-label">
                <h3>관리</h3>
                <input type="radio" name="preq" value="관리" onClick={preqCheck}/>    
            </label>
            
            <label className="preq-label">
                <h3>디자인</h3>
                <input type="radio" name="preq" value="디자인" onClick={preqCheck}/>    
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

        </>
    )

}

export default hot(module)(PreQuestion);