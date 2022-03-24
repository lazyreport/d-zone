import React, { useRef, useState } from "react";
import styles from "./Loginbf_pannel3.module.css";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

function Loginbf_pannel3() {
  // button onClick
  const handleInputFile = (inputId) => {
    let inputedId = document.getElementById(inputId);
    inputedId.click();
    document.getElementById("");
  };

  // image preview
  const [imageSrc, setImageSrc] = useState("");
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  // 문의신청
  const inquiryRegist = () => {
    var inquiryRegist = document.inquiryRegist;
    var inputCompanyname = inquiryRegist.inputCompanyname.value;
    var inputUsername = inquiryRegist.inputUsername.value;
    var inputPhonenumber = inquiryRegist.inputPhonenumber.value;
    var inputRequest = inquiryRegist.inputRequest.value;

    if (
      !inputCompanyname ||
      !inputUsername ||
      !inputPhonenumber ||
      !inputRequest
    ) {
      alert("문의신청을 위한 필수 정보를 모두 입력해주세요.");
    } else {
      // inquiryRegist.submit();
      alert("문의신청이 완료 되었습니다.");
    }
  };

  return (
    <main className={styles.loginbf_pannel3}>
      <FadeIn>
        <div>
          <h2 className={styles.pannelText}>패널인증시스템 신청</h2>
          <p>
            도입 관련하여 궁금하신 점을 아래에 작성해주시면 <br />
            최대한 빠른 시간 내 담당자가 연락 드리도록 하겠습니다.
          </p>
        </div>
        <div className={styles.content}>
          <form name="inquiryRegist">
            <div className={`${styles.row} ${styles.companynameRow}`}>
              <label htmlFor="inputCompanyname">업체명</label>
              <div className={styles.col}>
                <input
                  type="name"
                  id="inputCompanyname"
                  placeholder="정보를 입력하세요"
                  required
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.usernameRow}`}>
              <label htmlFor="inputUsername">담당자명</label>
              <div className={styles.col}>
                <input
                  type="text"
                  id="inputUsername"
                  placeholder="정보를 입력하세요"
                  required
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.phoneRow}`}>
              <label htmlFor="inputPhonenumber">연락처</label>
              <div className={styles.col}>
                <input
                  type="number"
                  id="inputPhonenumber"
                  placeholder="'-' 를 제외한 정보를 입력하세요."
                  required
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.emailRow}`}>
              <label htmlFor="inputEmail">이메일</label>
              <div className={styles.col}>
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="정보를 입력하세요"
                  required
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.requestRow}`}>
              <label htmlFor="inputRequest">신청/문의내용</label>
              <div className={styles.col}>
                <textarea
                  name="my-textarea"
                  cols="53"
                  rows="10"
                  id="inputRequest"
                  className={styles.request}
                  required
                  placeholder="보다 신속 정확한 확인을 위하여&#13;&#10;신청/문의 내용을 구체적으로 알려주세요."
                ></textarea>
              </div>
            </div>

            <div className={`${styles.row} ${styles.addfileRow}`}>
              <label htmlFor="">첨부파일</label>
              <div className={styles.addfileCol}>
                <input
                  type="file"
                  id="addfile1"
                  className="addfile1"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                    console.log(e.target.value, 1)
                  }}
                />
                <button
                  className={styles.addfileBtn1}
                  onClick={(e) => {
                    e.preventDefault();
                    handleInputFile("addfile1");
                  }}
                >
                  {imageSrc ? (
                    <img src={imageSrc} alt="preview-img" />
                  ) : (
                    <img src="img/addfile_camera.png" alt="" />
                  )}
                </button>
                <input
                  type="file"
                  id="addfile2"
                  className="addfile2"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                    console.log(e.target.value, 2)
                  }}
                />
                <button
                  className={styles.addfileBtn2}
                  onClick={(e) => {
                    e.preventDefault();
                    handleInputFile("addfile2");
                  }}
                >
                  <img src="img/addfile_camera.png" alt="" />
                </button>
                <input
                  type="file"
                  id="addfile3"
                  className="addfile3"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                    console.log(e.target.value, 3)
                  }}
                />
                <button
                  className={styles.addfileBtn3}
                  onClick={(e) => {
                    e.preventDefault();
                    handleInputFile("addfile3");
                  }}
                >
                  <img src="img/addfile_camera.png" alt="" />
                </button>
                <span className={styles.addfileDes}>
                  이미지 파일(GIF,PNG,JPG)을 기준으로 최대 10MB이하, 최대
                  3개까지 등록 가능합니다.
                </span>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <button
                type="submit"
                // type="button"
                className={styles.btn}
                onClick={() => {
                  inquiryRegist();
                }}
              >
                문의신청
              </button>
              <Link to="/">
                <button type="cancel" className={styles.btn}>
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

export default Loginbf_pannel3;