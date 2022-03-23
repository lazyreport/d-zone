import React from "react";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./survey_overview.module.css";
import Gnb from "../Gnb";

function SurveyOverview() {
  // 테이블 자동생성
  const ContentsNum = 10; // 해당 값 만큼 컨텐츠 생성
  const makeTableContents = (numberOfContents) => {
    const result = [];
    for (let i = 0; i < numberOfContents; i++) {
      result.push(
        // 생성하고 싶은 tbody 의 tr 복사
        <tr  onClick={showInfo} className={`${styles.panel_table_row} ${styles.accepted}`}>
          <td>{i+1}</td>
          <td>갤럭시S21 사용자 만족도 조사{i+1}</td>
          <td>2021.10.28 ~ 2021.11.28</td>
          <td>500</td>
          <td>0</td>
          <td>승인완료</td>
          <td>2021.10.28</td>
          <td>홍길동</td>
          <td>해당없음</td>
        </tr>
      );
    }
    return result;
  };

  const showInfo = ()=>{
    window.location.replace("/survey-info")
  }


  return (
    <div className={styles.survey_overview}>
      <Gnb />
      <main className={styles.content}>
        <h2>설문승인 현황조회</h2>
        <div className={styles.route_box}>
          <span className={styles.route1}>통합관리</span>
          <Link to="#" className={styles.route2}>설문승인 현황조회</Link>
        </div>
        <div className={styles.search_box}>
          <input type="text" className={styles.search_box_input} />
          <Link to="#"><FontAwesomeIcon icon={faSearch} size={'2x'} className={styles.search_icon} /></Link>
      </div>
        <table className={styles.panel_table}>
          <caption>설문승인 현황</caption>
              <colgroup>
                  <col style={{width: "60px"}} />
                  <col style={{width: "280px"}} />
                  <col style={{width: "230px"}} />
                  <col style={{width: "100px"}} />
                  <col style={{width: "100px"}} />
                  <col style={{width: "80px"}} />
                  <col style={{width: "100px"}} />
                  <col style={{width: "100px"}} />
                  <col style={{width: "100px"}} />
              </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">조사명</th>
              <th scope="col">조사요청기관</th>
              <th scope="col">필요샘플 수</th>
              <th scope="col">완료샘플 수</th>
              <th scope="col">상태</th>
              <th scope="col">상태변경일</th>
              <th scope="col">상태변경자</th>
              <th scope="col">소속</th>
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
}

export default SurveyOverview;