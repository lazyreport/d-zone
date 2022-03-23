import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import "./LoginContainer.css";

function LoginContainer() {    
 

  return (
    <div className="loginContainer">
      <div className="formContainer">
        <h1>WELCOME TO DIGITAL ZONE</h1>
        <form className="form">
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="PASSWORD" />
          <button type="button" id="login-button"><Link to="/home">로그인</Link></button>
          <ul className="service-group">
            <Link to='/log-in/search-id'>
            <li><a href="#">아이디 찾기</a></li>
            </Link>
            <li><span>|</span></li>
            <Link to='/log-in/search-password'>
            <li><a href="#">비밀번호 찾기</a></li>
            </Link>
            <li><span>|</span></li>
            <li><Link to="/sign-up">회원가입</Link></li>
          </ul>
          <button type="submit" id="pannel-button"><Link to="/request-pannel-certif">패널인증시스템</Link></button>
        </form>
      </div>
      <ul className="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
}

export default LoginContainer;