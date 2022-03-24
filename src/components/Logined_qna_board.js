import React from "react";
import styles from "./Logined_qna_board.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Gnb from "./Gnb";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

export default function Logined_qna_board() {
  // 답글 수
  const replyNumber = 3;

  // 테이블 자동생성
  const qnaContentsNum = 15; // 해당 값 만큼 컨텐츠 생성
  const makeTableContents = (numberOfContents) => {
    const result = [];
    for (let i = 0; i <= numberOfContents; i++) {
      result.push(
        // 생성하고 싶은 tbody 의 tr 복사
        <tr className={styles.tr}>
          <td scope="row" className={styles.td}>{i}</td>
          <td className={styles.td}>
            <Link to='/QA/qna_article'>
            <a href="#" className={styles.a}>Q&A 게시판 {(i % 6) === 0 ? `(${replyNumber})` : ''}</a>
            </Link>
          </td>
          <td className={styles.td}>2021.11.{10 + i}</td>
          <td className={styles.td}>홍길동</td>
        </tr>
      );
    }
    return result.reverse();
  };

  return (
    <div>
      <main className={styles.logined_qna_board}>
        <FadeIn>
          <div>
            <h1 className={styles.pannelText}>Q&A</h1>
          </div>
          <div className={styles.qnaBox}>
            <div className={styles.registSearch}>
              <div className={styles.registBox}>
                <Link to='/QA/qna_regist'>
                  <button className={styles.regist}>신규등록</button> 
                </Link>
              </div>
              {/* e: registBox */}
              <form>
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className={`${styles.btn} ${styles.btnOutlineSecondary}`}
                    type="button"
                    id="button-addon2"
                  >
                    <img src="/img/btn_search.png" alt="" className={styles.img} />
                  </button>
                </div>
              </form>
              {/* e: searchBox */}
            </div>
            {/* e: registSearch */}
            <table className={styles.table}>
              <thead>
                <tr className={styles.tr}>
                  <th scope="col" className={`${styles.th} ${styles.number}`}>
                    번호
                  </th>
                  <th scope="col" className={`${styles.th} ${styles.title}`}>
                    제목
                  </th>
                  <th scope="col" className={`${styles.th} ${styles.registDate}`}>
                    등록일
                  </th>
                  <th scope="col" className={`${styles.th} ${styles.register}`}>
                    등록자
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {makeTableContents(qnaContentsNum)}
              </tbody>
            </table>
            {/* e: table */}
            <div className={styles.qnaPageNumber}>
              <div className={styles.controllerBox}>
                <a href="#" className={`${styles.a} ${styles.btn}`}>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={`${styles.fa} ${styles.faCaretLeft}`}
                  />
                </a>
                <a href="#" className={styles.a}>1</a>
                <a href="#" className={styles.a}>2</a>
                <a href="#" className={styles.a}>3</a>
                <a href="#" className={styles.a}>4</a>
                <a href="#" className={styles.a}>5</a>
                <a href="#" className={`${styles.a} ${styles.btn}`}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={`${styles.fa} ${styles.fasCaretRight}`}
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}