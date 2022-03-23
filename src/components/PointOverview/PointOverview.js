import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./point_overview.module.css";
import Gnb from "../Gnb";
import FadeIn from "react-fade-in";

function PointOverview() {
  // 테이블 자동생성
  const ContentsNum = 10; // 해당 값 만큼 컨텐츠 생성
  const makeTableContents = (numberOfContents) => {
    let result = [];
    for (let i = 0; i <= numberOfContents; i++) {
      result.push(
        // 생성하고 싶은 tbody 의 tr 복사
        <tr onClick={showInfo} className={styles.panel_table_row}>
          <td>160</td>
          <td>A</td>
          <td>010-0000-0000</td>
          <td>A@A.com</td>
          <td>20,000</td>
          <td>환불신청</td>
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
    window.location.replace("/general/point-info")
  }

  //datepicker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className={styles.point_overview}>
      <Gnb />
      <main className={styles.content}>
        <FadeIn>
          <div className={styles.route_box}>
            <span className={styles.route1}>통합관리</span>
            <Link to="#" className={styles.route2}>포인트 현황</Link>
          </div>
          <div className={styles.condition_box}>
            <span>일시</span>
            <div className={styles.date_box}>
              
              <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                locale={ko}      //한글로 변경 
                dateFormat="yyyy.MM.dd" // 시간 포맷 변경 
                showPopperArrow={false}    // 화살표 변경 
                customInput={		  // 날짜 뜨는 인풋 커스텀
                  <Form.Control as="textarea" rows={1} style={{width:"250px"}}/>
                }
                className={styles.date_picker}
              />
              <span>~</span>
              <DatePicker 
                selected={endDate} 
                onChange={(date) => setEndDate(date)} 
                locale={ko}      //한글로 변경 
                dateFormat="yyyy.MM.dd" // 시간 포맷 변경 
                showPopperArrow={false}    // 화살표 변경
                customInput={		  // 날짜 뜨는 인풋 커스텀
                  <Form.Control as="textarea" rows={1} style={{width:"250px"}}/>
                }
                className={styles.date_picker}
              />
            </div>


            <div className={styles.process_box}>
              <span>구분</span>
              <select name="process" className={styles.process_select}>
                <option value="reception">충전</option>
                <option value="proceeding">환불신청</option>
                <option value="complete">환불완료</option>
              </select>
            </div>
            <div className={styles.search_box}>
              <input type="text" className={styles.search_box_input} />
              <Link to="#"><FontAwesomeIcon icon={faSearch} className={styles.search_icon} /></Link>
            </div>
            {/* <button className="search_btn">검색</button> */}
          </div>
          <table className={styles.panel_table}>
            <caption>패널인증시스템 신청현황</caption>
                <colgroup>
                    <col style={{width: "100px;"}} />
                    <col style={{width: "100px;"}} />
                    <col style={{width: "150px;"}} />
                    <col style={{width: "250px;"}} />
                    <col style={{width: "100px;"}} />
                    <col style={{width: "100px;"}} />
                    <col style={{width: "200px;"}} />
                    <col style={{width: "200px;"}} />
                    <col style={{width: "200px;"}} />
                    <col style={{width: "120px;"}} />
                </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">업체명</th>
                <th scope="col">연락처</th>
                <th scope="col">이메일</th>
                <th scope="col">포인트</th>
                <th scope="col">구분</th>
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
            <Link to="/point-overview/2">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#">5</Link>
            <Link to="#" className={styles.btn}><FontAwesomeIcon icon={faCaretRight} /></Link>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}

export default PointOverview;