import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import "./assets/css/style.scss";

const PreQuestion = () => {
    const preqValue = [
        {
            type: '개발',
            sumlist: [front, back, desk, mobile, gclient, iot]
        },
        {
            type: '연구',
            sumlist: [mle, what, ma]
        },
        {
            type: '관리',
            sumlist: [gserver, dbm, bigdb]
        },
        {
            type: '디자인',
            sumlist: [model, uiux]
        },
    ]

    return(
        <>

            <h1>관심 분야</h1>
            
            <label className="preq-label">
                <h3>개발</h3>
                <input type="radio" name="preq" value="개발"/>    
            </label>
            
            <label className="preq-label">
                <h3>연구</h3>
                <input type="radio" name="preq" value="연구"/>    
            </label>
            
            <label className="preq-label">
                <h3>관리</h3>
                <input type="radio" name="preq" value="관리"/>    
            </label>
            
            <label className="preq-label">
                <h3>디자인</h3>
                <input type="radio" name="preq" value="디자인"/>    
            </label>

        </>
    )

}

export default hot(module)(PreQuestion);