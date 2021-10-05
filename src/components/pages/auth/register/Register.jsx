import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { useHistory } from "react-router-dom";

import "./assets/css/style.scss";

const Register = () => {
  const history = useHistory();

  const test = async (e) => {
    e.persist();
    e.preventDefault();

    const postAuth = await fetch("http://3.35.43.53/api/v1/users/me/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password1: e.target.pwd1.value,
        password2: e.target.pwd2.value,
      }),
    });

    history.push("/");
  };

  // 아이디 중복확인 비밀번호 중복체크: 이후 추가 예정
  // 자동 중복확인? or alert 사용
  return (
    <article className="register-form">
      <section className="register-form__header">
        <h1>회원가입</h1>
      </section>

      <form className="register-form__container" onSubmit={test}>
        <label>
          <span>아이디</span>
          <input required name="username" type="text" placeholder="id" />
        </label>

        <label>
          <span>비밀번호</span>
          <input
            required
            name="pwd1"
            type="password"
            placeholder="비밀번호"
            minLength="8"
          />
        </label>

        <label>
          <span>비밀번호 확인</span>
          <input
            required
            name="pwd2"
            type="password"
            placeholder="비밀번호 확인"
          />
        </label>

        <label>
          <span>이메일</span>
          <input required name="email" type="email" placeholder="e-mail" />
        </label>

        <input type="submit" value="회원가입" />
      </form>
    </article>
  );
};

export default hot(module)(Register);
