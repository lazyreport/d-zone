import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Join2_2.module.css";

function Join2_2() {
  return (
    <div className={styles.Join2_2}>
      <main>
        <div className={styles.inner_box}>
          <div className={styles.step_box}>
            <ul>
              <li>Step1. 약관 동의<img src="img/step1.jpg" alt="동의" /></li>
              <li className={styles.on}>Step2. 정보 입력<img src="img/step2.png" alt="입력" /></li>
              <li>Step3. 가입 완료<img src="img/step3.png" alt="완료" /></li>
            </ul>
          </div>

          <h4>
            기본정보입력<span>(*필수)</span>
          </h4>

          <form name={styles.write_form_member} method="post">
            <table>
              <tr>
                <th>
                  <span>*</span> 회원구분
                </th>
                <td className={styles.s}>
                  <div className={styles.select_box}>
                    <input type="radio" name="chk_member" /> 개인회원
                    <input
                      type="radio"
                      name="chk_member"
                      className={styles.chk_member}
                      checked
                    />{" "}
                    법인회원
                  </div>
                  {/* <!-- 토글로 생성하기 --> */}
                  <ul className={styles.input_group}>
                    <li>*법인명</li>
                    <li>
                      <input
                        type="text"
                        name="cursor:pointer"
                        className={styles.company_input}
                      />
                    </li>
                    <li>*사업자등록번호</li>
                    <li>
                      <input
                        type="text"
                        name="cursor:pointer"
                        className={styles.company_input}
                      />
                      <Link to="#" className={styles.first_btn}>
                        법인조회
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 아이디
                </th>
                <td>
                  <input
                    type="text"
                    name="cursor:pointer"
                    className={styles.input_box}
                  />
                  <Link to="#">중복확인</Link>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 사용자 이름
                </th>
                <td>
                  <input type="text" className={styles.input_box} name="" />
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 비밀번호 입력
                </th>
                <td>
                  <input
                    type="password"
                    name=""
                    className={styles.input_box}
                    placeholder=" 영문 대소문자/숫자 혼합 10~15자리 내로 입력해주세요."
                  />
                  <Link to="#" className={styles.eye_btn}></Link>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 비밀번호 확인
                </th>
                <td>
                  <input type="password" className={styles.input_box} name="" />
                  <Link to="#" className={styles.eye_btn}></Link>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 휴대폰 번호
                </th>
                <td>
                  <input type="text" className={styles.phone_box} /> -
                  <input type="text" className={styles.phone_box} name="tel_h2_1" /> -
                  <input type="text" className={styles.phone_box} name="tel_h2_2" />
                  <Link to="#">인증번호발송</Link>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 인증번호 입력
                </th>
                <td>
                  <input type="text" className={styles.input_box} name="" />
                  <Link to="#">확인</Link>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 이메일 입력
                </th>
                <td>
                  <input type="text" className={styles.input_box} name="" />
                  <Link to="#">인증</Link>
                </td>
              </tr>
            </table>
          </form>
          <div className={styles.btn_group}>
            <Link to="/sign-up" className={styles.back_btn}>
              이전페이지
            </Link>
            <Link to="/join3" className={styles.join_btn}>
              회원가입
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Join2_2;