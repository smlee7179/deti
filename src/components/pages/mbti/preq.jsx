import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Link, Route } from "react-router-dom";
import "./assets/css/style.scss";

import MBTI from "./mbti";

const PreQuestion = () => {

    const [preqType, setPreqType] = useState();
    const [q2Type, setQ2Type] = useState();
    const [q1Type, setQ1Type] = useState();

    const preqCheck = (e) => {
        e.persist();
        console.log(e.target.value)
        setPreqType(e.target.value)
    }

    const q2Check = (e) => {
        e.persist();
        console.log(e.target.value)
        setQ2Type(e.target.value)
    }

    const q1Check = (e) => {
        e.persist();
        console.log(e.target.value)
        setQ1Type(e.target.value)
    }

    return (
        <>

            <section style={{ margin: "20px", }}>
                <h1>IT 전공자냐?</h1> {/* 질문-전공 */}

                <label className="preq-label">
                    <h3>예</h3>
                    <input type="radio" name="q1" value="예" onClick={q1Check} />
                </label>

                <label className="preq-label">
                    <h3>아니오</h3>
                    <input type="radio" name="q1" value="아니오" onClick={q1Check} />
                </label>
            </section>

            <section style={{ margin: "20px", }}> {/* 질문-언어 */}
                <h1>사용하는 언어</h1>

                <label className="preq-label">
                    <h3>C</h3>
                    <input type="radio" name="q2" value="C" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>C++</h3>
                    <input type="radio" name="q2" value="C++" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>C#</h3>
                    <input type="radio" name="q2" value="C#" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>Java</h3>
                    <input type="radio" name="q2" value="Java" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>Javascript</h3>
                    <input type="radio" name="q2" value="Javascript" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>Pythont</h3>
                    <input type="radio" name="q2" value="Python" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>Swift</h3>
                    <input type="radio" name="q2" value="Swift" onClick={q2Check} />
                </label>

                <label className="preq-label">
                    <h3>Go</h3>
                    <input type="radio" name="q2" value="Go" onClick={q2Check} />
                </label>

            </section>

            <section style={{ margin: "20px", }}>
                <h1>관심 분야</h1> {/* 질문-분야 */}

                <label className="preq-label">
                    <h3>웹/앱</h3>
                    <input type="radio" name="preq" value="웹앱" onClick={preqCheck} />
                </label>

                <label className="preq-label">
                    <h3>게임</h3>
                    <input type="radio" name="preq" value="게임" onClick={preqCheck} />
                </label>

                <label className="preq-label">
                    <h3>데이터</h3>
                    <input type="radio" name="preq" value="데이터" onClick={preqCheck} />
                </label>

                <label className="preq-label">
                    <h3>정보 보안</h3>
                    <input type="radio" name="preq" value="정보보안" onClick={preqCheck} />
                </label>

                <label className="preq-label">
                    <h3>사물 인터넷</h3>
                    <input type="radio" name="preq" value="사물인터넷" onClick={preqCheck} />
                </label>
            </section>

            <h1>
                <Link
                    to={{
                        pathname: '/mbti/question',
                        state: {
                            epValue: preqType,
                            q2Value: q2Type,
                            q1Value: q1Type,
                        },
                    }}
                >테스트하기!</Link>
            </h1>

            {/* <h1 className="delete">강민지 존예!!!!!</h1> */}

        </>
    )

}

export default hot(module)(PreQuestion);