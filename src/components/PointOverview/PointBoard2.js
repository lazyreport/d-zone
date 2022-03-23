import React from 'react';
import style from './point_board.module.css';

function PointBoard2() {
  return (
    <div className="PointBoard2">
      <table className={style.panel_table}>
          <caption>패널인증시스템 신청현황</caption>
              <colgroup>
                  <col style={{width: "100px;"}} />
                  <col style={{width: "100px;"}} />
                  <col style={{width: "150px;"}} />
                  <col style={{width: "250px;"}} />
                  <col style={{width: "100px;"}} />
                  <col style={{width: "100px;"}} />
                  <col style={{width: "200px;"}} />
                  <col style={{width: "200px;"}} />
                  <col style={{width: "200px;"}} />
                  <col style={{width: "120px;"}} />
              </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">업체명</th>
              <th scope="col">연락처</th>
              <th scope="col">이메일</th>
              <th scope="col">포인트</th>
              <th scope="col">구분</th>
              <th scope="col">신청일</th>
              <th scope="col">상태변경일</th>
              <th scope="col">상태</th>
              <th scope="col">상태변경자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>150</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>149</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>148</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>147</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>146</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>145</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>144</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>143</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>142</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
            <tr>
              <td>141</td>
              <td>A</td>
              <td>010-0000-0000</td>
              <td>A@A.com</td>
              <td>20,000</td>
              <td>환불신청</td>
              <td>2021.10.28</td>
              <td>2021.10.28</td>
              <td>접수</td>
              <td>해당없음</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default PointBoard2;