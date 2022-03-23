import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  
  return (
    <div className="footer-container">
      <div className="inner-wrap">
        <div className="footer-info">
          <h2>(주)디지털존</h2>
          <p>
            고객센터 : 02-000-0000
            <br />
            사업자 등록번호 : 000-0000-0000-000
            <br />
            호스팅서비스 : 주식회사 디지털존
            <br />
            서울특별시 구로구 디지털로33 55 E&C벤처드림타워 2차 1001호
          </p>
        </div>
        <section class="footer-sns-terms">
          <Button buttonStyle="btn--footer">
            <Link to="/terms-of-use" className="btn-mobile">
              이용약관
            </Link>
          </Button>
          <div class="footer-select">
            <select class="form-select">
              <option selected>Family site</option>
              <option value="1">homepage01</option>
              <option value="2">homepage02</option>
              <option value="3">homepage03</option>
              <option value="3">homepage04</option>
              <option value="3">homepage05</option>
            </select>
          </div>
          {/* 
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            ></Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            ></Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            ></Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            ></Link>
          </div>*/}
        </section>
      </div>
    </div>
  );
}

export default Footer;
