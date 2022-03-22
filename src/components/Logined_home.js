import React, { useState } from "react";
import styles from "./Logined_home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import FadeIn from "react-fade-in";

function Logined_home() {
  // 설문조사 체크
  const [isChecked, setIsChecked] = useState("checkWill");
  const handleIsChecked = (radioBtnName) => {
    setIsChecked(radioBtnName);
    // console.log(radioBtnName)
  };

  // 테이블 자동생성
  const surveyWill = 6;
  const surveyIng = 15;
  const surveyEd = 20;
  const makeTableContents = (numberOfContents) => {
    const result = []; 
    for(let i=0; i < numberOfContents; i++){
    result.push(
        <tr>
          <td scope="row" className={styles.number}>
            {i+1}
          </td>
          <td scope="row" className={styles.title}>
            <a>갤럭시S21 사용자 만족도 조사{i+1}</a>
          </td>
          <td scope="row" className={styles.date}>
            2021.10.28 ~ 2021.11.28
          </td>
          <td scope="row" className={styles.sampleNeed}>
            500
          </td>
          <td scope="row" className={styles.sampleComplete}>
            0
          </td>
          <td scope="row" className={styles.state}>
            <span> 설문예정</span>
          </td>
          <td scope="row" className={styles.register}>
            홍길동
          </td>
          <td scope="row" className={styles.belong}>
            개인
          </td>
        </tr>
      );
    }
    // setPosts(result.reverse());
    return result.reverse();
  };

  const pagination = (total, limit, page, setPage) => {

  }


  // PageNation을 위한 props 설정들
  // const [posts, setPosts] = useState([]);
  // const [limit, setLimit] = useState(30);
  // const [page, setPage] = useState(1);
  // const offset = (page - 1) * limit;

  return (
    <main>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.describe}>
            <div className={styles.surveyWill}>
              <img src="/img/home_describe1.png" alt="" />
              <span className={styles.title}>설문예정</span>
              <span className={styles.case}>{surveyWill}건</span>
            </div>
            <img src="/img/home_describe_arrow.png" alt="" />
            <div className={styles.surveyIng}>
              <img src="/img/home_describe2.png" alt="" />
              <span className={styles.title}>설문중</span>
              <span className={styles.case}>{surveyIng}건</span>
            </div>
            <img src="/img/home_describe_arrow.png" alt="" />
            <div className={styles.surveyEd}>
              <img src="/img/home_describe3.png" alt="" />
              <span className={styles.title}>설문마감</span>
              <span className={styles.case}>{surveyEd}건</span>
            </div>
          </div>
          {/* e: describe */}

          <div className={styles.surveyBox}>
            <div className={styles.radioBox}>
              <div className={styles.checkWill}>
                <input
                  className={styles.checkRadio1}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="checkWill"
                  checked={isChecked === "checkWill"}
                  onClick={() => handleIsChecked("checkWill")}
                />
                <label
                  className={styles.formCheckLabel}
                  htmlFor="flexRadioDefault1"
                >
                  설문 예정
                </label>
              </div>
              <div className={styles.checkIng}>
                <input
                  className={styles.checkRadio2}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="checkIng"
                  checked={isChecked === "checkIng"}
                  onClick={() => handleIsChecked("checkIng")}
                />
                <label
                  className={styles.formCheckLabel}
                  htmlFor="flexRadioDefault2"
                >
                  설문 중
                </label>
              </div>
              <div className={styles.checkEd}>
                <input
                  className={styles.checkRadio3}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value="checkEd"
                  checked={isChecked === "checkEd"}
                  onClick={() => handleIsChecked("checkEd")}
                />
                <label
                  className={styles.formCheckLabel}
                  htmlFor="flexRadioDefault3"
                >
                  설문 마감
                </label>
              </div>
            </div>
            {/* e: radioBox */}

            <div className={styles.tableBox}>
              {isChecked === "checkWill" ? (
                <div className={styles.willSurvey}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">설문번호</th>
                        <th scope="col">조사명</th>
                        <th scope="col">요청기간</th>
                        <th scope="col">필요샘플수</th>
                        <th scope="col">완료샘플수</th>
                        <th scope="col">상태</th>
                        <th scope="col">등록자</th>
                        <th scope="col">소속</th>
                      </tr>
                    </thead>
                    <tbody>
                      {makeTableContents(surveyWill)}
                    </tbody>
                  </table>
                  {/* e: table */}
                  <div className={styles.qnaPageNumber}>
                    <div className={styles.controllerBox}>
                      <a href="#" className={styles.btn}>
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          className={`${styles.fa} ${styles.faCaretLeft}`}
                        />
                      </a>
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#" className={styles.btn}>
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className={`${styles.fa} ${styles.fasCaretRight}`}
                        />
                      </a>
                    </div>
                  </div>
                  {/* e: qnaPageNumber */}
                </div>
              ) : (
                ""
              )}

              {isChecked === "checkIng" ? (
                <div className={styles.surveing}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">설문번호</th>
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
                      {makeTableContents(surveyIng)}
                    </tbody>
                  </table>
                  {/* e: table */}
                  <div className={styles.qnaPageNumber}>
                    <div className={styles.controllerBox}>
                      <a href="#" className={styles.btn}>
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          className={`${styles.fa} ${styles.faCaretLeft}`}
                        />
                      </a>
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#" className={styles.btn}>
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className={`${styles.fa} ${styles.fasCaretRight}`}
                        />
                      </a>
                    </div>
                  </div>
                  {/* e: qnaPageNumber */}
                </div>
              ) : (
                ""
              )}
              {/* e: surveing */}

              {isChecked === "checkEd" ? (
                <div className={styles.surveied}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">설문번호</th>
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
                      {makeTableContents(surveyEd)}
                    </tbody>
                  </table>
                  {/* e: table */}
                  <div className={styles.qnaPageNumber}>
                    <div className={styles.controllerBox}>
                      <a href="#" className={styles.btn}>
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          className={`${styles.fa} ${styles.faCaretLeft}`}
                        />
                      </a>
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#" className={styles.btn}>
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className={`${styles.fa} ${styles.fasCaretRight}`}
                        />
                      </a>
                    </div>
                  </div>
                  {/* e: qnaPageNumber */}
                </div>
              ) : (
                ""
              )}
            </div>
            {/* e: tableBox */}
          </div>
          {/* e: surveyBox */}
        </FadeIn>
      </div>
    </main>
  );
}

export default Logined_home;