import React from "react";
import styles from "./css/transfer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import '../../reset.css';
import { useCallback } from "react";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
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

function Transfer({trans, children, onClose}){
    if (!trans) return null
    return(
        <>
        <div style={OVERLAY_STYLE} />
        <div style={MODAL_STYLES}>
            {children}
        <div className={styles.transferArea}>
            <div className={styles.titlebox}>
                <section className={styles.titletext}>
                    <span>설문 전송</span>
                </section>
                <section className={styles.xbox}>
                    <a href="#" onClick={onClose}>
                        <FontAwesomeIcon
                            icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                        />
                    </a>
                </section> 
            </div>
            <div className={styles.contentsBox}>
                <section className={styles.transferText}>
                    <span>설문을 등록하시겠습니까?</span>
                </section>
            </div>
            <div className={styles.btnArea}>
                <button className={styles.confirmBtn} onClick={()=>{onClose();alert('등록이 완료되었습니다.');}}>확인</button>
                <button className={styles.cancelBtn} onClick={()=>{onClose();alert('취소되었습니다.');}}>취소</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Transfer;