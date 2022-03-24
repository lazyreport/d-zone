import React from "react";
import styles from "./Logined_qna_article.module.css";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import LocationBar from "./LocationBar.js"

function Logined_qna_article() {
  // 게시글 삭제
  const deleteArticle = () => {
    alert("게시글 삭제가 완료되었습니다.")
  }

  return (
    <div>
      <Gnb />
    <main className={styles.logined_qna_article}>
      <FadeIn>
      <div className={styles.container}>
          <div className={styles.articleWrap}>
            <LocationBar depth1="Q&A" depth2="Q&A 게시판"/>
            <div className={styles.article}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col" className={`${styles.th} ${styles.articleNum}`}>
                      159
                    </th>
                    <th scope="col" className={`${styles.th} ${styles.articleTitle}`}>
                      Q&A 게시판
                    </th>
                    <th scope="col" className={`${styles.th} ${styles.articleWritter}`}>
                      홍길동
                    </th>
                    <th scope="col" className={`${styles.th} ${styles.articleDate}`}>
                      2022.02.04
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className={styles.content}>
              <span className={styles.span}>Q&A 게시판의 내용입니다.</span>
            </div>
            <div className={styles.comment}>
              <div className={styles.commentUserInfo}>
                <img src="/img/qna_article_admin.png" alt="" />
                <span className={`${styles.span} ${styles.admin}`}>관리자</span>
                <span className={`${styles.span} ${styles.date}`}>2022-02-07</span>
                <span className={`${styles.span} ${styles.time}`}>09:02:25</span>
              </div>
              <div className={styles.commentBtn}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.modify}`}
                >
                  수정
                </button>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.delete}`}
                >
                  삭제
                </button>
              </div>
            </div>

            <div className={styles.replyContent}>
              <span>댓글입니다.</span>
            </div>
            <form>
              <div className={styles.replyRegist}>
                <span className={styles.inputGroupText}>댓글입력</span>
                <textarea
                  className={styles.formControl}
                  aria-label="With textarea"
                ></textarea>
                <div className={styles.replyConfirm}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnOutlinePrimary}`}
                  >
                    확인
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className={styles.modifyButton}>
            <Link to='/QA/qna_regist'>
              <button type="button" className={`${styles.btn} ${styles.modify}`}>
                수정
              </button>
            </Link>
            <Link to='/QA'>
              <button type="button" className={`${styles.btn} ${styles.delete}`} onClick={()=>{
                deleteArticle();
              }} >
                삭제
              </button>
            </Link>
            <Link to='/QA'>
              <button type="button" className={`${styles.btn} ${styles.list}`}>
                목록
              </button>
            </Link>
          </div>
      </div>
      </FadeIn>
    </main>
    </div>
  );
}

export default Logined_qna_article;