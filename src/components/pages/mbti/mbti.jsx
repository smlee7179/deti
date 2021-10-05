import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import "./assets/css/style.scss";

import questions from "./question";

const MBTI = ({location}) => {

    console.log(location)

    const preqValue = [
        {
            type: '개발',
            sumlist: ['front', 'back', 'desk', 'mobile', 'gclient', 'iot']
        },
        {
            type: '연구',
            sumlist: ['mle', 'what', 'ma']
        },
        {
            type: '관리',
            sumlist: ['gserver', 'dbm', 'bigdb']
        },
        {
            type: '디자인',
            sumlist: ['model', 'uiux']
        },
    ]

    const [totalScore, setTotalScore] = useState(
        [
            { type: 'front', name: "FrontEnd", score: 0.0, },
            { type: 'back', name: "Backend", score: 0.0, },
            { type: 'desk', name: "데탑", score: 0.0, },
            { type: 'mobile', name: "모바일", score: 0.0, },
            { type: 'model', name: "3d model", score: 0.0, },
            { type: 'uiux', name: "uiux", score: 0.0, },
            { type: 'gclient', name: "game client", score: 0.0, },
            { type: 'gserver', name: "game server", score: 0.0, },
            { type: 'dbm', name: "dbm", score: 0.0, },
            { type: 'bigdb', name: "bigdb", score: 0.0, },
            { type: 'mle', name: "ML", score: 0.0, },
            { type: 'what', name: "white", score: 0.0, },
            { type: 'ma', name: "ma", score: 0.0, },
            { type: 'iot', name: "IOT", score: 0.0, }
        ]
    );

    const calcMbti = (e) => {
        e.persist();
        e.preventDefault();

        const exScore = totalScore;

        let front, back, desk, mobile, model, uiux, gclient, 
            gserver, dbm, bigdb, mle, what, ma, iot ;

        front = back = desk = mobile = model = uiux = gclient
        = gserver = dbm = bigdb = mle = what = ma = iot = 0.0;

        var sz = [7, 6, 5, 6, 6, 6, 5, 5, 5, 6, 5, 7, 6, 4];

        [...Array(34)].map((item, i)=>{

            const exNum = eval(`e.target.n${i}`);

            front += exNum.value * questions[i].effect.front
            back += exNum.value * questions[i].effect.back
            desk += exNum.value * questions[i].effect.desk
            mobile += exNum.value * questions[i].effect.mobile
            model += exNum.value * questions[i].effect.model
            uiux += exNum.value * questions[i].effect.uiux
            gclient += exNum.value * questions[i].effect.gclient
            gserver += exNum.value * questions[i].effect.gserver
            dbm += exNum.value * questions[i].effect.dbm
            bigdb += exNum.value * questions[i].effect.bigdb
            mle += exNum.value * questions[i].effect.mle
            what += exNum.value * questions[i].effect.what
            ma += exNum.value * questions[i].effect.ma
            iot += exNum.value * questions[i].effect.iot

        });

        console.log(location.state.epValue)
        switch (location.state.epValue) {
            case '개발':
                front += 5.0;
                back += 5.0;
                desk += 5.0;
                mobile += 5.0; 
                gclient += 5.0; 
                iot += 5.0;
                break;

            case '연구':
                mle += 5.0;
                what += 5.0; 
                ma += 5.0;
                break;

            case '관리':
                dbm += 5.0;
                gserver += 5.0; 
                bigdb += 5.0;
                break;

            case '디자인':
                model += 5.0;
                uiux += 5.0; 
                break;
        }


        const jobList = [
            front, back, desk, mobile, model, uiux, gclient, 
            gserver, dbm, bigdb, mle, what, ma, iot 
        ];

        exScore.map((item, i)=>{
            item.score = jobList[i] / sz[i];
        });

        setTotalScore(exScore);

        console.log(
            `front: ${front/sz[0]}\n`,
            `back: ${back/sz[1]}\n`,
            `desk: ${desk/sz[2]}\n`,
            `mobile: ${mobile/sz[3]}\n`,
            `model: ${model/sz[4]}\n`,
            `uiux: ${uiux/sz[5]}\n`,
            `gclient: ${gclient/sz[6]}\n`,
            `gserver: ${gserver/sz[7]}\n`,
            `dbm: ${dbm/sz[8]}\n`,
            `bigdb: ${bigdb/sz[9]}\n`,
            `mle: ${mle/sz[10]}\n`,
            `what: ${what/sz[11]}\n`,
            `ma: ${ma/sz[12]}\n`,
            `iot: ${iot/sz[13]}\n`,
        );
    }

    return (
        <>
            <form className="question-wrapper" onSubmit={calcMbti}>

                <Link to="/preq">Pre Question</Link>

                {
                    questions.map((item, i) => {
                        return (
                            <label className="question-label" key={i}>
                                <h1>{i + 1}. {item.question}</h1>
                                <div className="input-wrapper">
                                    <input name={'n'+i} value={1.0} type="radio" />
                                    <input name={'n'+i} value={2.0} type="radio" />
                                    <input name={'n'+i} value={3.0} type="radio" />
                                    <input name={'n'+i} value={4.0} type="radio" />
                                    <input name={'n'+i} value={5.0} type="radio" />
                                </div>
                            </label>
                        )
                    })
                }
                <button type="submit">RESULT</button>
            </form>
        </>
    );

}

export default hot(module)(MBTI);