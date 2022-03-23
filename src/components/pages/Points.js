import React from 'react';
import Gnb from '../Gnb';
import './points.css';
import FadeIn from 'react-fade-in';

export default function Points() {
  
  return (
    <div className='points'>
      <Gnb />
      <main className="point">
      <FadeIn>
      <h2>[ 보유 포인트 ] <span>100point</span></h2>
      <div className="point-form-wrap">
          <form className="row gy-1 gx-4 align-items-center">
              <div className="col-auto">
                  <label className="visually-hidden" for="autoSizingSelect"></label>
                  <select className="form-select" id="autoSizingSelect">
                    <option selected>은행명</option>
                    <option value="1">농협</option>
                    <option value="2">신한은행</option>
                    <option value="3">국민은행</option>
                    <option value="3">우리은행</option>
                    <option value="3">기업은행</option>
                  </select>
                </div>
              <div className="col-auto">
                <label  for="autoSizingInput"></label>
                <input type="text" class="form-control" id="autoSizingInput" placeholder="환불 계좌 입력" />
              </div>
              <div className="col-auto">
                <label for="autoSizingInput"></label>
                <input type="text" className="form-control" id="autoSizingInput" placeholder="계좌명 입력" />
              </div>
              <div className="col-auto">
                <label for="autoSizingInput"></label>
                <input type="text" className="form-control" id="autoSizingInput" placeholder="환불 포인트 입력" />
              </div>             
              <div className="col-auto">
                  <button type="button" className="point-btn form-control ">환불신청</button>
              </div>
            </form>    
          </div>

          <section className="use-list">
              <h5>사용내역</h5>
              <ul>
                  <li>2021.02.15</li>
                  <li>노트3 만족도 조사</li>
                  <li>-1900point</li>
                  <li>잔여 100point</li>
              </ul>
              <ul>
                  <li>2021.02.15</li>
                  <li>노트3 만족도 조사</li>
                  <li>-1900point</li>
                  <li>잔여 100point</li>
              </ul>
              <ul>
                  <li>2021.02.15</li>
                  <li>노트3 만족도 조사</li>
                  <li>-1900point</li>
                  <li>잔여 100point</li>
              </ul>
              <ul>
                  <li>2021.02.15</li>
                  <li>노트3 만족도 조사</li>
                  <li>-1900point</li>
                  <li>잔여 100point</li>
              </ul>
              <div className="col-auto point-insert">
                  <label className="visually-hidden" for="autoSizingInput"></label>
                  <input type="text" className="form-control" id="autoSizingInput" placeholder="충전 포인트 입력" />
                </div>
              <p>
                  * 카드결제만 가능합니다.
              </p>
              <div className="col-auto point-add">
                  <button type="button" className="btn-yellow">충전하기</button>
              </div>
              
          </section>
      </FadeIn>    
      </main>
    </div>
  )
}
