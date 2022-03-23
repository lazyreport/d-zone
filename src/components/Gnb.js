import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './Gnb.css';



function Gnb() {
  return (
    <nav className='gnb'>
      <ul className='gnb-nav-list'>
        <NavLink to="/home" className="depth0">홈</NavLink>
        <NavLink to="/FAQ" className="depth0">FAQ</NavLink>
        <NavLink to="/QA" className="depth0">Q&amp;A</NavLink>
        <NavLink to="/account" className="depth0">계정설정</NavLink>
        <NavLink to="/registration" className="depth0">설문등록/현황조회</NavLink>
        <NavLink to="/points" className="depth0">포인트관리</NavLink>
        <ul className="depth0 depth1">
          <NavLink to="/general" className="dp1">
            통합관리
            <ul className="depth2">
              <NavLink to="/panel-system" className="dp2">패널인증시스템 신청현황</NavLink>
              <NavLink to="/point-overview" className="dp2">포인트 현황</NavLink>
              <NavLink to="/survey-overview" className="dp2">설문승인 현황</NavLink>
            </ul>
          </NavLink>
        </ul>
      </ul>
    </nav>

    
  )
}

export default Gnb;