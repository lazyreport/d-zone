import React from "react";
import styles from "./css/send.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import '../../reset.css';
import { NavLink } from "react-router-dom";

const MODAL_STYLES = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    zIndex: 1000
}
const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}


function Send({send, children, onClose}){
    if (!send) return null
    return(
        <>
        <div style={OVERLAY_STYLE} />
        <div style={MODAL_STYLES}>
            {children}
        <div className={styles.sendbox}>
            <div className={styles.titlebox}>
                <section className={styles.xbox} onClick={onClose}>
                    <a href="#">
                        <FontAwesomeIcon
                            icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                        />
                    </a>
                </section>
            </div>
            <div className={styles.contentsArea}>
                <section className={styles.headerTxtArea}>
                    <span>설문을 발송하시겠습니까?</span>
                </section>
                <div className={styles.specification}>
                    <section className={styles.subtxt}>
                        <p>[설문명세서]</p>
                    </section>
                    <section className={styles.formArea}>
                        <ul>
                            <li><strong>조사명 : </strong> 갤럭시S21 사용자 만족도 조사</li>
                            <li><strong>설문링크 : </strong><a href="#" className={styles.Alink}>www.a.com</a></li>
                            <li><strong>필요샘플 수 : </strong> 500</li>
                            <li><strong>참여포인트 : </strong> 100pt</li>
                            <li>
                                <span><strong>설문기간 </strong></span>
                                <label></label>
                                <input type="date" /> ~ <input type="date" />
                            </li>
                            <li><strong>발송패널 수 : </strong> 2,500건</li>
                            <li>
                                <span><strong>설문 프로파일 : </strong></span>
                                <div className={styles.tag}>남성</div>
                                <div className={styles.tag}>20세~39세</div>
                                <div className={styles.tag}>SKT</div>
                                <div className={styles.tag}>갤럭시S21</div>
                            </li>
                        </ul>
                    </section> 
                </div> 
                <section className={styles.msgbox}>
                    <p>총 250,000 point가 차감됩니다.</p>
                </section>
            </div>
            <div className={styles.btnArea}>
            <NavLink to='/points'>
                <button className={styles.confirmBtn} onClick={()=>{alert('포인트가 부족합니다. 충전하시겠습니까?')}}>확인</button>
            </NavLink>
                <button className={styles.cancelBtn} onClick={onClose}>취소</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Send;