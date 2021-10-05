import React from "react";
import { hot } from "react-hot-loader";
import "./assets/css/style.scss";

const Find = () => {
  const token = localStorage?.getItem('access_token');

  const findUsername = async (e) =>{
    e.persist();
    e.preventDefault();

    const getUsername = await fetch('http://3.35.43.53/api/v1/users/me/id/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        email: e.target.email.value
      }),
    });
    const resUsername = await getUsername.json();
    console.log(resUsername);
  }

  const findPassword = async (e) =>{
    e.persist();
    e.preventDefault();

    console.log(e.target.username.value);
    console.log(e.target.email.value);

    const getPassword = await fetch('http://3.35.43.53/api/v1/users/password/code', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
      }),
    });
    const resPassword = await getPassword.json();
    console.log(resPassword);
  }

  return (
    <div className="find">

      <form className="find-auth" onSubmit={findUsername}>
        <span>아이디 찾기</span>
        <input name="email" type="email" placeholder="이메일을 입력하세요" />
        <input type="submit" value="확인" />
      </form>

      <form className="find-auth" onSubmit={findPassword}>
        <span>비밀번호 찾기</span>
        <input name="username" type="text" placeholder="아이디를 입력하세요" />
        <input name="email" type="email" placeholder="이메일을 입력하세요" />
        <input type="submit" value="인증번호 발송" />
      </form>

    </div>
  );
}

export default hot(module)(Find);
