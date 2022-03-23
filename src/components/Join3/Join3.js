import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Join3.module.css'

function Join3() {
  return (
    <div className={styles.Join3}>
      <main>
        <div className="inner-box">
          <div className={styles.step_box}>
            <ul>
              <li>Step1. 약관 동의<img src="img/step1.jpg" alt="동의" /></li>
              <li>Step2. 정보 입력<img src="img/step2.png" alt="입력" /></li>
              <li className={styles.on}>Step3. 가입 완료<img src="img/step3.png" alt="완료" /></li>
            </ul>
          </div>

          <div className={styles.contents}>
            <div className={styles.contents_box}>
              <img src="img/join_fin.png" alt="체크박스" />
              <div className={styles.contents_box_p}>
                <p>회원가입이 완료되었습니다.</p>
                <p>디지털존 회원이 되신 것을 진심으로 환영합니다.</p>
                <div className={styles.btn_group}>
                  <Link to="/" className={styles.complete_btn}>메인으로</Link>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </main>
    </div>
  )
}

export default Join3