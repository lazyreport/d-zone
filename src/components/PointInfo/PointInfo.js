import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./point_info.module.css";
import Gnb from "../Gnb";
import FadeIn from "react-fade-in";

function PointInfo() {

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

  //목록버튼
  /* const goList = ()=>{
    window.location.replace("/general/point-overview")
  } */

  return (
    <div className={styles.point_info}>
      <Gnb />
      <main className={`${styles.content} ${styles.cf}`}>
      <h2>포인트 현황</h2>
        <FadeIn>
          <div className={styles.route_box}>
            <span className={styles.route1}>통합관리</span>
            <Link to="/general/point-overview" className={`${styles.route1} ${styles.route2}`}>포인트 현황</Link>
            <Link to="#" className={styles.route2}>상세정보</Link>
          </div>
          <table className={styles.info}>
            <caption>패널인증시스템 신청현황 상세정보</caption>
            <colgroup>
              <col style={{width: "150px"}} />
              <col style={{width: "650px"}} />
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
              <td>연락처</td>
              <td>010-0000-0000</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>a@a.com</td>
            </tr>
            <tr>
              <td>구분</td>
              <td>환불</td>
            </tr>
            <tr>
              <td>포인트</td>
              <td>20,000 point</td>
            </tr>
            <tr className={styles.last}>
              <td>계좌정보</td>
              <td>기업은행 | 0000-0000-0000-00 | 홍길동</td>
            </tr>
          </table>
          <div className={styles.info_btn_box}>
            <span>상태</span>
            <select name="process" className={styles.process_select} onChange={changeProcess} value={process}>
              {Options.map((item, index)=>(
              <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>
            <Link to="#" className={styles.save_btn}>저장</Link>
            <Link to="/general/point-overview" className={styles.list_btn}>목록</Link>
          </div>
          <div className={styles.change_log}>
            <p>[기록]</p>
            <ul className={styles.change_log_list}>
              <li>2021.12.06 13:36 김주리 님이 상태를 완료 &#40;으&#41;로 변경하였습니다.</li>
              <li>2021.12.06 17:55 김주리 님이 상태를 {process} &#40;으&#41;로 변경하였습니다.</li>
            </ul>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}

export default PointInfo;