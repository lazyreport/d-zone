import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./panel_system.module.css";
import Gnb from "../Gnb";


export const PanelSystem = ()=>{

  // 테이블 자동생성
  const ContentsNum = 10; // 해당 값 만큼 컨텐츠 생성
  const makeTableContents = (numberOfContents) => {
    const result = [];
    for (let i = 0; i <= numberOfContents; i++) {
      result.push(
        // 생성하고 싶은 tbody 의 tr 복사
        <tr onClick={showInfo} className={styles.panel_table_row}>
          <td>160</td>
          <td>A</td>
          <td>010-0000-0000</td>
          <td>A@A.com</td>
          <td>2021.10.28</td>
          <td>2021.10.28</td>
          <td>접수</td>
          <td>해당없음</td>
        </tr>
      );
    }
    return result;
  };

  const showInfo = ()=>{
    window.location.replace("/panelsystem-info")
  }


  return (
    <div className={styles.panel_system}>
      <Gnb />
      <main className={`${styles.content} ${styles.cf}`}>
      <h2>패널인증시스템 신청현황</h2>
      <div className={styles.route_box}>
        <span className={styles.route1}>통합관리</span>
        <Link to="#" className={styles.route2}>패널인증시스템 신청현황</Link>
      </div>
      <div className={styles.search_box}>
        <input type="text" className={styles.search_box_input} />
        <Link to="#"><FontAwesomeIcon icon={faSearch} size={'2x'} className={styles.search_icon} /></Link>
      </div>
      <table className={styles.panel_table}>
        <caption>패널인증시스템 신청현황</caption>
            <colgroup>
                <col style={{width: "100px"}} />
                <col style={{width: "100px"}} />
                <col style={{width: "150px"}} />
                <col style={{width: "250px"}} />
                <col style={{width: "200px"}} />
                <col style={{width: "200px"}} />
                <col style={{width: "200px"}} />
                <col style={{width: "120px"}} />
            </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">업체명</th>
            <th scope="col">연락처</th>
            <th scope="col">이메일</th>
            <th scope="col">신청일</th>
            <th scope="col">상태변경일</th>
            <th scope="col">상태</th>
            <th scope="col">상태변경자</th>
          </tr>
        </thead>
        <tbody>
          {makeTableContents(ContentsNum)}
        </tbody>
      </table>
      <div className={styles.controller_box}>
        <Link to="#" className={styles.btn}><FontAwesomeIcon icon={faCaretLeft} /></Link>
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#">3</Link>
        <Link to="#">4</Link>
        <Link to="#">5</Link>
        <Link to="#" className={styles.btn}><FontAwesomeIcon icon={faCaretRight} /></Link>
      </div>
    </main>
    </div>
  );
};

export default PanelSystem;