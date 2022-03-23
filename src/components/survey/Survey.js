import React from "react";
import styles from "./css/survey.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Register from './Register';
import Send from './Send';
import '../../reset.css';
import { Link, NavLink } from "react-router-dom";
import FadeIn from 'react-fade-in';


function Survey(){
  const [isOpen, setIsOpen] = useState(false);
  const [isSend, setIsSend] = useState(false);

  /* search clear */
  function searchIpt(){
    const clear = document.getElementById("txtsearch");
    clear.value = '';
  }
  function searchEnt(){
    if (window.event.keyCode == 13) {
      const clears = document.getElementById("txtsearch");
      clears.value = '';
    }
  }
    return( 
      <FadeIn>
      <div className={styles.surveyArea}>
        <div className={styles.topbar}>
          <h2>설문등록 현황조회</h2>
          <div className={styles.searchArea}>
            <section className={styles.searchbox}>
              <input id="txtsearch" type="search" className={styles.searchline} onKeyUp={searchEnt}/>
              <a href="#" className={styles.searchicon} onClick={searchIpt}>
                <FontAwesomeIcon
                  icon={faSearch} 
                />
              </a>
            </section>
          </div>
          <section className={styles.topbtn}>
              <button onClick={()=>{setIsOpen(true)}}>신규등록</button>
              <Register open={isOpen} onClose={()=>setIsOpen(false)} />
              <button onClick={()=>{setIsSend(true)}}>발송</button>
              <Send send={isSend} onClose={()=>setIsSend(false)} />
          </section>  
        </div>
        <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">선택</th>
                <th scope="col">번호</th>
                <th scope="col">조사명</th>
                <th scope="col">요청기간</th>
                <th scope="col">필요샘플 수</th>
                <th scope="col">완료샘플 수</th>
                <th scope="col">상태</th>
                <th scope="col">등록자</th>
                <th scope="col">소속</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                </th>
                <td>160</td>
                <td>갤럭시S21 사용자 만족도 조사</td>
                <td>2021.10.28 ~ 2021.11.28</td>
                <td>500</td>
                <td>0</td>
                <td>승인완료</td>
                <td>홍길동</td>
                <td>개인</td>
              </tr>
              <tr>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                </th>
                <td>159</td>
                <td>패널인증시스템 수요도 조사</td>
                <td>2021.10.25 ~ 2021.11.30</td>
                <td>500</td>
                <td>0</td>
                <td>승인완료</td>
                <td>홍길동</td>
                <td>개인</td>
              </tr>
              <tr>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>158</td>
                <td className={styles.pagelink}><NavLink to="/registration/marketresearch">비대면 시장조사 필요성 인식 조사</NavLink></td>
                <td>2021.09.30 ~ 2021.10.25</td>
                <td>2,500</td>
                <td>1,500</td>
                <td>설문중</td>
                <td>김주리</td>
                <td>PMI</td>
              </tr>
              <tr>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>157</td>
                <td>삼성 비스포크 냉장고 만족도 조사</td>
                <td>2021.09.15 ~ 2021.09.30</td>
                <td>3,000</td>
                <td>0</td>
                <td>승인대기</td>
                <td>전선향</td>
                <td>디지털존</td>
              </tr>
              <tr className={styles.fin}>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>156</td>
                <td>남녀 성차별 인식 조사</td>
                <td>2021.08.27 ~ 2021.09.28</td>
                <td>300</td>
                <td>0</td>
                <td>승인거부</td>
                <td>고승원</td>
                <td>A업체</td>
              </tr>
              <tr className={styles.fin}>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>155</td>
                <td>전국지표조사</td>
                <td>2021.08.25 ~ 2021.09.15</td>
                <td>100</td>
                <td>0</td>
                <td>승인거부</td>
                <td>김주리</td>
                <td>PMI</td>
              </tr>
              <tr className={styles.fin}>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>154</td>
                <td>부동산 중개업 실태 조사</td>
                <td>2021.08.25 ~ 2021.08.30</td>
                <td>550</td>
                <td>550</td>
                <td>설문종료</td>
                <td>안소현</td>
                <td>B업체</td>
              </tr>
              <tr className={styles.fin}>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>153</td>
                <td>방사선 및 방사성 동위원소 이용 실태 조사</td>
                <td>2021.08.26 ~ 2021.08.29</td>
                <td>5,000</td>
                <td>5,000</td>
                <td>설문종료</td>
                <td>홍길동</td>
                <td>개인</td>
              </tr>
              <tr className={styles.fin}>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>152</td>
                <td>대선주자 여론 조사</td>
                <td>2021.08.25 ~ 2021.09.01</td>
                <td>10,000</td>
                <td>10,020</td>
                <td>설문종료</td>
                <td>황유희</td>
                <td>개인</td>
              </tr>
              <tr className={styles.fin}>
                <th scope="row" className={styles.rowBottom}>
                  <input className={styles.formCheckInput} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                </th>
                <td>151</td>
                <td>대졸자 직업 이동 경로 조사</td>
                <td>2021.07.30 ~ 2021.08.15</td>
                <td>800</td>
                <td>800</td>
                <td>설문종료</td>
                <td>전선향</td>
                <td>디지털존</td>
              </tr>
            </tbody>
          </table>
          <section className={styles.pageChange}>
            <a href="#" className={styles.arrowkey}>
              <FontAwesomeIcon
                icon={faCaretLeft} className={`${styles.fa}${styles.faCaretLeft}`}
                />
            </a>
            <a href="#" className={styles.pageNum}>1</a>
            <a href="#" className={styles.pageNum}>2</a>
            <a href="#" className={styles.pageNum}>3</a>
            <a href="#" className={styles.pageNum}>4</a>
            <a href="#" className={styles.pageNum}>5</a>
            <a href="#" className={styles.arrowkey}>
              <FontAwesomeIcon
                icon={faCaretRight} className={`${styles.fa}${styles.faCaretRight}`}
                />
            </a>
          </section>
      </div>
      </FadeIn>
    )
}

export default Survey;