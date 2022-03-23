import React from "react";
import styles from "./css/file-upload.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import '../../reset.css';


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

function FileUpload({fileopen, children, onClose}){
    
    if (!fileopen) return null
    return(
        <>
        <div style={OVERLAY_STYLE} /> 
        <div style={MODAL_STYLES}>
        {children}
        <div className={styles.fileUploadbox}>
            <div className={styles.titlebox}>
                <section className={styles.titletext}>
                    <span>파일등록</span>
                </section>
                <section className={styles.xbox} onClick={onClose}>
                    <a href="#" >
                        <FontAwesomeIcon
                            icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                        />
                    </a>
                </section> 
            </div>
            <div className={styles.contentsbox}>
                <section className={styles.filebox}>
                    <span>파일첨부</span>
                    <div className={styles.filearea}>
                        <label for="uploadbtn">첨부</label>
                        <input type="file" id="uploadbtn" className={styles.uploadBtn} />
                    </div>
                </section>
                <section className={styles.btnArea}>
                    <button className={styles.submitBtn} onClick={()=>{onClose();alert('파일이 업로드 되었습니다.');}}>
                        <span>등록</span>
                    </button>
                </section>
            </div>
        </div>
        </div>
        </>
    )
}

export default FileUpload;