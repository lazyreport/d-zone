import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./survey_info.module.css";
import Gnb from "../Gnb";
import FadeIn from "react-fade-in";

function SurveyInfo() {

  const [process,setProcess] = useState("접수");
  

  const Options =[
    {key:"접수", value:"접수"},
    {key:"처리중", value:"처리중"},
    {key:"완료", value:"완료"}
  ]

  const changeProcess = (e) => {
    setProcess(e.currentTarget.value);
    console.log(process);
  };

  //input
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  //목록버튼
  /* const goList = ()=>{
    window.location.replace("/general/survey-overview")
  } */

  function btnSave(e) {
    e.preventDefault();
    alert("저장되었습니다.");
  }


  return (
    <div className={styles.SurveyInfo}>
      <Gnb />
        <main className={`${styles.content} ${styles.cf}`}>
        <h2>설문 상세정보</h2>
          <FadeIn>
            <div className={styles.route_box}>
              <span className={styles.route1}>통합관리</span>
              <Link to="/general/survey-overview" className={`${styles.route1} ${styles.route2}`}>설문승인 현황</Link>
              <Link to="#" className={styles.route2}>상세정보</Link>
            </div>
            <div className={`${styles.container} ${styles.cf}`}>
              <table className={styles.client_info}>
                <caption>설문 상세정보</caption>
                  <colgroup>
                    <col style={{width: "100px"}} />
                    <col style={{width: "260px"}} />
                  </colgroup>
                  <tr>
                    <td>업체명</td>
                    <td>주식회사A</td>
                  </tr>
                  <tr>
                    <td>담당자명</td>
                    <td>홍길동</td>
                  </tr>
                  <tr>
                    <td>아이디</td>
                    <td>aaa</td>
                  </tr>
                  <tr>
                    <td>연락처</td>
                    <td>010-0000-0000</td>
                  </tr>
                  <tr className={styles.last}>
                    <td>이메일</td>
                    <td>a@a.com</td>
                  </tr>
              </table>
              <div className={styles.survey_info}>
                <ul>
                  <li>조사명 : 갤럭시S21 사용자 만족도 조사</li>
                  <li>설문링크 : <Link to="#">www.a.com</Link></li>
                  <li>필요샘플 수 : 500</li>
                  <li>참여포인트 : 100pt</li>
                  <li>설문기간 : 2021.10.28~2021.11.28</li>
                  <li>발송패널 수 : 2,500건</li>
                  <li className={styles.survey_profile}>설문 프로파일 : 
                    <span>남성</span>
                    <span>20세~39세</span>
                    <span>SKT</span>
                    <span>갤럭시S21</span>
                  </li>
                  <li className={styles.survey_point}>결제 포인트 : 250,000 point</li>
                </ul>
              </div>
              <div className={`${styles.state_box} ${styles.cf}`}>
            <div className={styles.state_process_box}>
              <span>상태</span>
              <select name="process" className={styles.process_select} onChange={changeProcess} value={process}>
              {Options.map((item, index)=>(
              <option key={item.key} value={item.key}>{item.value}</option>
              ))}
              </select> <br />
              <span>사유</span>
              <input onChange={onChange} value={text} />
            </div>
            <div className={styles.state_btn_box}>
              <Link to="#" className={styles.save_btn} onClick={btnSave} >저장</Link>
              <Link to="/general/survey-overview" className={styles.list_btn}>목록</Link>
              {/* <button className={styles.list_btn} onClick={goList}>목록</button> */}
            </div>
          </div>
            </div>
          
          <div className={styles.change_log}>
            <p>[기록]</p>
            <ul className={styles.change_log_list}>
              <li>2021.12.06 13:36 김주리 님이 상태를 완료 &#40;으&#41;로 변경하였습니다. 사유: 기간 변경</li>
              <li>2021.12.06 17:55 김주리 님이 상태를 {process} &#40;으&#41;로 변경하였습니다. 사유: {text}</li>
            </ul>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}

export default SurveyInfo;