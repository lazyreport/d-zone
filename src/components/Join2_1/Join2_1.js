import React , { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import styles from './Join2_1.module.css'

function Join2_1() {
  return (
    <div className={styles.Join2_1}>
      <main>
    <div className={styles.inner_box}>
        <div className={styles.step_box}>
          <ul>
            <li>Step1. 약관 동의<img src="img/step1.jpg" alt="동의" /></li>
              <li className={styles.on}>Step2. 정보 입력<img src="img/step2.png" alt="입력" /></li>
              <li>Step3. 가입 완료<img src="img/step3.png" alt="완료" /></li>
          </ul>
        </div>

        <h4>기본정보입력<span>(*필수)</span></h4>


        <form name="write_form_member" method="post">
          <table>
            <tr>
              {/* 회원구분 옆에 물음표 추가하여 가이드라인 띄우기 */}
                <th><span>*</span> 회원구분</th>
                  <td className={styles.s}>
                    {/* toggle로 내용구분 */}
                    <input type="radio" name="chk_member" checked /> 개인회원
                    <input type="radio" name="chk_member" className={styles.chk_member} /> 법인회원
                  </td>
            </tr>
            <tr>
              <th><span>*</span> 아이디</th>
              <td>
              <input type="text" name="cursor:pointer" className={styles.input_box} />
              {/* <!-- alert 창 띄우기 --> */}
              <Link to='#'>중복확인</Link>
              </td>
            </tr>
            <tr>
              <th><span>*</span> 사용자 이름</th>
              <td>
              <input type="text" className={styles.input_box} name="" />
              </td>
            </tr>
            <tr>
              <th><span>*</span> 비밀번호 입력</th>
              <td><input type="password" name="" className={styles.input_box} placeholder=" 영문 대소문자/숫자 혼합 10~15자리 내로 입력해주세요."/>
              <Link to='#' className={styles.eye_btn}></Link></td>
            </tr>
            <tr>
              <th><span>*</span> 비밀번호 확인</th>
              <td><input type="password" className={styles.input_box} name="" />
              <Link to='#' className={styles.eye_btn}></Link></td>
            </tr>
              <tr>
              <th><span>*</span> 휴대폰 번호</th>
                <td><input type="text" className={styles.phone_box} /> -
                    <input type="text" className={styles.phone_box} name="tel_h2_1" /> -
                    <input type="text" className={styles.phone_box}  name="tel_h2_2" />
                    <a href='#'>인증번호발송</a>
                </td>
              </tr>
              <tr>
                <th><span>*</span> 인증번호 입력</th>
                <td>
                <input type="text" className={styles.input_box} name="" />
                <Link to='#'>확인</Link>
                </td>
              </tr>
              <tr>
                <th><span>*</span> 이메일 입력</th>
                <td>
                <input type="text" className={styles.input_box} name="" />
                {/* <!-- 해당버튼 클릭시 '인증완료'문구 보이게하기 --> */}
                <Link to='#'>인증</Link>
                </td>
              </tr>
                </table>
            </form>            
          <div className={styles.btn_group}>
            <NavLink to="/sign-up" className={styles.back_btn}>이전페이지</NavLink>
            <NavLink to="/join3" className={styles.join_btn}>회원가입</NavLink>
          </div>


      </div>
    </main>
    </div>
  )
}

export default Join2_1