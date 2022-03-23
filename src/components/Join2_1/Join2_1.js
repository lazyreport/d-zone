import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Join2_1.module.css";

function Join2_1({ firstPassword, lastPassword }) {
  // 설문조사 체크
  const [isChecked, setIsChecked] = useState("individual");
  const handleIsChecked = (radioBtnName) => {
    setIsChecked(radioBtnName);
    // console.log(radioBtnName)
  };

  //id alert
  function checkID(e) {
    e.preventDefault();
    alert("사용가능한 ID입니다");
  }

  //pw
  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    //  10 ~ 15자 영문, 숫자 조합
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{10,15}$/;
    // 형식에 맞는 경우 true 리턴
    if (regExp.test(e.target.value) == true) {
      e.preventDefault();
      alert("사용가능한 비밀번호입니다");
    } else {
      e.preventDefault();
      alert("사용불가능한 비밀번호입니다");
    }
  };

  const comparePassword = (e) => {
    e.preventDefault();
    alert("비밀번호가 일치합니다");
  };
  const sendMsg = (e) => {
    e.preventDefault();
    alert("인증번호가 발송되었습니다");
  };
  const checkMsg = (e) => {
    e.preventDefault();
    var num = 123456;
    alert("인증번호가 일치합니다");
  };
  const checkEmail = (e) => {
    e.preventDefault();
    alert("이메일이 인증되었습니다");
  };

  /* const comparePassword = (e) => {
    e.preventDefault();
    const firstPassword = this.state;
    const lastPassword = this.state;
    // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
    if (firstPassword.length < 1 || lastPassword.length < 1) {
      e.preventDefault();
      alert("비밀번호가 일치합니다");
      console.log("true");
      // 비밀번호가 같다면 일치
    } else if (firstPassword === lastPassword){
      e.preventDefault();
      alert("비밀번호가 일치하지 않습니다");
      console.log("false");
    };
  }; */

  return (
    <div className={styles.Join2_1}>
      <main>
        <div className={styles.inner_box}>
          <div className={styles.step_box}>
            <ul>
              <li>
                Step1. 약관 동의
                <img src="img/step1.jpg" alt="동의" />
              </li>
              <li className={styles.on}>
                Step2. 정보 입력
                <img src="img/step2.png" alt="입력" />
              </li>
              <li>
                Step3. 가입 완료
                <img src="img/step3.png" alt="완료" />
              </li>
            </ul>
          </div>

          <h4>
            기본정보입력<span>(*필수)</span>
          </h4>

          <form name="write_form_member" method="post">
            <table>
              <tr>
                {/* 회원구분 옆에 물음표 추가하여 가이드라인 띄우기 */}
                <th>
                  <span>*</span> 회원구분
                </th>
                <td className={styles.s}>
                  <div className={styles.ipbox}>
                    {/* toggle로 내용구분 */}
                    <input type="radio" name="chk_member" 
                    value="individual"
                    checked={isChecked === "individual"}
                    onClick={() => handleIsChecked("individual")}
                    /> 개인회원
                    <input
                      type="radio"
                      name="chk_member"
                      className={styles.chk_member}
                      value="corporate"
                      checked={isChecked === "corporate"}
                      onClick={() => handleIsChecked("corporate")}
                    /> 법인회원
                  </div>
                  <div className={styles.toggle_box}>
                    {isChecked === "individual" ? " " : ""}

                    {isChecked === "corporate" ? (
                      <ul className={styles.input_group}>
                        <li>*법인명</li>
                        <li>
                          <input
                            type="text"
                            name="cursor:pointer"
                            className={`${styles.company_input} ${styles.input_box}`}
                          />
                        </li>
                        <li>*사업자등록번호</li>
                        <li>
                          <input
                            type="text"
                            name="cursor:pointer"
                            className={`${styles.company_input} ${styles.input_box}`}
                          />
                        </li>
                        <li>
                          <Link to="#" className={styles.first_btn}>
                            법인조회
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
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
                  {/* <!-- alert 창 띄우기 --> */}
                  <button onClick={checkID} className={styles.checkbtn}>
                    중복확인
                  </button>
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
                    onBlur={checkPassword}
                    value={firstPassword}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 비밀번호 확인
                </th>
                <td>
                  <input
                    type="password"
                    className={styles.input_box}
                    name=""
                    value={lastPassword}
                  />
                  <button onClick={comparePassword} className={styles.checkbtn}>
                    비밀번호 확인
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 휴대폰 번호
                </th>
                <td>
                  <input type="text" className={styles.phone_box} /> -
                  <input
                    type="text"
                    className={styles.phone_box}
                    name="tel_h2_1"
                  />{" "}
                  -
                  <input
                    type="text"
                    className={styles.phone_box}
                    name="tel_h2_2"
                  />
                  <button onClick={sendMsg} className={styles.checkbtn}>
                    인증번호발송
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 인증번호 입력
                </th>
                <td>
                  <input type="text" className={styles.input_box} name="" />
                  <button onClick={checkMsg} className={styles.checkbtn}>
                    확인
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <span>*</span> 이메일 입력
                </th>
                <td>
                  <input type="text" className={styles.input_box} name="" />
                  {/* <!-- 해당버튼 클릭시 '인증완료'문구 보이게하기 --> */}
                  <button onClick={checkEmail} className={styles.checkbtn}>
                    인증
                  </button>
                </td>
              </tr>
            </table>
          </form>
          <div className={styles.btn_group}>
            <NavLink to="/sign-up" className={styles.back_btn}>
              이전페이지
            </NavLink>
            <NavLink to="/join3" className={styles.join_btn}>
              회원가입
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Join2_1;
