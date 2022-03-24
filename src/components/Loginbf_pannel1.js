import React from "react";
import styles from "./Loginbf_pannel1.module.css";
import FadeIn from "react-fade-in"
import { Link } from "react-router-dom";


function Loginbf_pannel1() {
  // 아이디 발송 클릭 시
  const login = () => {
    var loginForm = document.loginForm;
    var inputEmail = loginForm.inputEmail.value;
    var inputUsername = loginForm.inputUsername.value;

    if (!inputEmail || !inputUsername) {
      alert("아이디와 사용자명을 모두 입력해주세요.");
    } else {
      // loginForm.submit();
      alert("입력하신 이메일로 아이디가 발송 되었습니다.");
      // gotoPage("/log-in")
    }
  };


  // 버튼 클릭 시 페이지 이동
  // const gotoPage = (pageName) => {
  //   window.location.href(pageName)
  // }


  // input 태그 onFocus
  const highLight = (e) => {
    console.log(e.currentTarget.id);
    const targetID = e.currentTarget.id;
    const cur = ``
  }

  return (
    <main className={styles.loginbf_pannel1}>
      <FadeIn>
      <div className={styles.pannel}>
        <h2 className={styles.pannelText}>아이디 찾기</h2>
        <span className={styles.pannelDes}>
          아이디는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.
        </span>
      </div>
      <div className={styles.content}>
        <form name="loginForm">
          <div className={`${styles.row} ${styles.emailRow}`}>
            <label htmlFor="inputEmail" className={styles.label}>
              <img src="/img/pannel1_img.png" className={styles.img}/>
            </label>
            <div className={styles.col}>
              <input
                type="email"
                id="inputEmail"
                className={styles.input}
                placeholder="이메일"
                required
                onInvalid="이메일을 입력해주세요."
              />
            </div>
          </div>
          <div className={`${styles.row} ${styles.usernameRow}`}>
            <label htmlFor="inputUsername" className={styles.label}>
              <img src="/img/pannel1_img.png" className={styles.img}/>
            </label>
            <div className={styles.col}>
              <input
                type="text"
                id="inputUsername"
                className={styles.input}
                placeholder="사용자명"
                required
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
              <button
                type="submit"
                // type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => {
                  login();
                }}
              >
                아이디발송
              </button>
            <Link to='/log-in'>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
                <a href="login.html">취소</a>
            </button>
            </Link>
          </div>
        </form>
      </div>
      </FadeIn>
    </main>
  );
}

export default Loginbf_pannel1;