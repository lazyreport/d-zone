import React from "react";
import Gnb from "./Gnb";
import styles from "./Logined_qna_regist.module.css";
import FadeIn from "react-fade-in"
import { Link } from "react-router-dom";

function Logined_qna_regist() {
  // 문의신청
  const qnaRegist = () => {
    var qnaRegist = document.qnaRegist;
    var titleInputBox = qnaRegist.titleInputBox.value;
    var contentInputBox = qnaRegist.contentInputBox.value;
    if (
      !titleInputBox ||
      !contentInputBox) {
      alert("필수 정보를 모두 입력해주세요.");
    } else {
      // qnaRegist.submit();
      alert("Q&A 등록이 완료 되었습니다.");
    }
  };

  return (
    <div>
      <Gnb />
      <main className={styles.logined_qna_regist}>
        <div className={styles.container}>
          <div className={styles.qnaRegist}>
            <FadeIn>
            <div className={styles.pannelCategory}>
              <h2 className={styles.pannelTitle}>
                Q&A <span>{">"}</span> Q&A 게시판
              </h2>
            </div>

            <div className={styles.describe}>
              <img src="/img/qna_regist_process.png" alt="" />
              <p>
                설문 관련하여 궁금하신 점을 아래에 작성해주시면
                <br />
                최대한 빠른 시간 내 답변을 등록하겠습니다.
              </p>
            </div>

            <form name="qnaRegist">
              <div className={styles.contents}>
                <div className={styles.titleInput}>
                  <label htmlFor="inputBox" className={styles.title}>
                    제목
                  </label>
                  <input
                    className={styles.titleInputBox}
                    aria-label="With textarea"
                    type="text"
                    id="titleInputBox"
                    required
                  ></input>
                </div>

                <div className={styles.contentInput}>
                  <label htmlFor="inputBox" className={styles.content}>
                    신청 / 문의내용
                  </label>
                  <textarea
                    className={styles.contentInputBox}
                    aria-label="With textarea"
                    id="contentInputBox"
                    required
                    placeholder="보다 신속 정확한 확인을 위하여&#13;&#10;신청/문의 내용을 구체적으로 알려주세요."
                  ></textarea>
                </div>
              </div>
            </form>

            <div className={styles.registCancleBtn}>
                <button
                  // type="submit"
                  type="button"
                  className={`${styles.btn} ${styles.regist}`}
                  onClick={()=>{
                    qnaRegist();
                  }}
                >
                  등록
                </button>
              <Link to='/QA'>
              <button
                type="button"
                className={`${styles.btn} ${styles.cancle}`}
              >
                취소
              </button>
              </Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Logined_qna_regist;