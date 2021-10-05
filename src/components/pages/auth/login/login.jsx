import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter, useHistory } from "react-router-dom";
import Media from "react-media";

import "./assets/css/style.scss";

const Login = () => {
  const history = useHistory();

  const postLogin = async (e) => {
    e.persist();
    e.preventDefault();

    const postAuth = await fetch("http://3.35.43.53/api/v1/auth/login/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    const resPost = await postAuth.json();

    localStorage.setItem("access_token", resPost.access_token);
    localStorage.setItem("refresh_token", resPost.refresh_token);

    history.push("/");
    location.reload();
  };

  //SNS 연동은 Client ID 발급 받으면 생성 예정
  return (
    <div className="container">
      <header className="welcom-header">
        <h1>Welcom to PROJECT</h1>
        <p>계정을 가지고 있다면 이메일로 로그인 해주세요 :)</p>
      </header>

      <form id="login-form" onSubmit={postLogin}>
        <input
          required
          name="username"
          type="id"
          placeholder="ID를 입력해주세요"
        />
        <input
          required
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <input type="submit" value="Log In" />
        <div className="help-login">
          <Link to="/find">아이디/비밀번호 찾기</Link>
          <Link to="/register">회원가입</Link>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default hot(module)(Login);
