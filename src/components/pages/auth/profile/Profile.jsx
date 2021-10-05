import React from "react";
import { hot } from "react-hot-loader";

import "./assets/css/style.scss";

function Profile() {
  return (
    <div className="profile">
      <span>비밀번호 변경</span>
      <span>회원 탈퇴</span>
    </div>
  );
}

export default hot(module)(Profile);
