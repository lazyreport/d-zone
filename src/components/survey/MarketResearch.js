import React from "react";
import styles from './css/market-research.module.css';
import '../../reset.css';
import * as Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { Link, NavLink } from "react-router-dom";
import Gnb from '../Gnb'
import FadeIn from 'react-fade-in';


function MarketResearch(){
    const donut1 =  {
        colors: ['rgb(155, 187, 89)', 'rgb(128, 127, 127)'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                innerSize: 80
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            colorByPoint: true,
            data: [{
                name: '응답완료',
                y: 60
            }, {
                name: '응답미완료',
                y: 40,
                sliced: false,
                selected: true
            }]
        }]
    };
    const donut2 = {
        colors: ['rgb(101, 170, 195)', 'rgb(128, 127, 127)'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                innerSize: 80
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            colorByPoint: true,
            data: [{
                name: '매칭성공',
                y: 40
            }, {
                name: '매칭실패',
                y: 60,
                sliced: false,
                selected: true
            }]
        }]
    };
    return(
        <>
        <FadeIn>
        <Gnb />
        <div className={styles.researchWrapper}>
            <div className={styles.marketResearch}>
                <div className={styles.toparea}>
                    <section className={styles.imgarea}>
                        <img src="../img/digitalnet.png"/>
                    </section>
                    <section className={styles.txtarea}>
                        <h2>비대면 시장조사 필요성 인식 조사</h2>
                        <p>2021.09.30 ~ 2021.10.25</p>
                    </section>
                </div>
                <div className={styles.chartarea}>
                    <div className={styles.chartTxt}>
                        <div className={styles.result}>
                            <h2>설문지 현황</h2>
                            <section className={styles.resultTxt}>
                                <span>필요설문</span>
                                <span>2,500 건</span>
                            </section>
                            <section className={styles.resultTxt}>
                                <span>응답완료</span>
                                <span>1,500 건</span>
                            </section>
                            <section className={styles.resultTxt}>
                                <span>응답미완료</span>
                                <span>1,000 건</span>
                            </section>
                        </div>
                        <div className={styles.result}>
                            <h2>매칭 현황</h2>
                            <section className={styles.resultTxt}>
                                <span>매칭발송</span>
                                <span>12,500 건</span>
                            </section>
                            <section className={styles.resultTxt}>
                                <span>매칭성공</span>
                                <span>5,000 건</span>
                            </section>
                            <section className={styles.resultTxt}>
                                <span>매칭실패</span>
                                <span>7,500 건</span>
                            </section>
                        </div>
                    </div>
                    <div className={styles.donutChart}>
                        <section className={styles.result1} style={{minWidth: '310px', height: '400px', maxWidth: '600px', margin: '0 auto'}}>
                        <HighchartsReact highcharts={Highcharts} options={donut1} />
                        </section>
                        <section className={styles.result2} style={{minWidth: '310px', height: '400px', maxWidth: '600px', margin: '0 auto'}}>
                        <HighchartsReact highcharts={Highcharts} options={donut2} /> 
                        </section>
                    </div>
                </div>
            </div>
            
            <div className={styles.profile}>
                <section className={styles.txtarea}>
                    <h2>설문 프로파일</h2>
                </section>
                <section className={styles.step}>
                    <dl className={styles.stepArea}>
                        <dt>1단계</dt>
                        <dd>
                            <div className={styles.scrollbar}>
                                <section className={styles.stepTag}>
                                    <button className={styles.tag}>
                                        <span>성별/남성</span>
                                    </button>
                                    <button className={styles.tag}>
                                        <span>나이/20세~39세</span>
                                    </button>
                                </section>
                            </div>
                        </dd>
                    </dl>
                    <dl className={styles.stepArea}>
                        <dt>2단계</dt>
                        <dd>
                            <div className={styles.scrollbar}>
                                <section className={styles.stepTag}>   
                                    <button className={styles.tag}>
                                        <span>통신사/SKT</span>
                                    </button>
                                </section>
                            </div>
                        </dd>
                    </dl>
                    <dl className={styles.stepArea}>
                        <dt>3단계</dt>
                        <dd>
                            <div className={styles.scrollbar}>
                                <section className={styles.stepTag}>
                                    <button className={styles.tag}>
                                        <span>전자기기/휴대폰기종/갤럭시S21</span>
                                    </button>
                                </section>
                            </div>   
                        </dd>
                    </dl>
                </section>
                <section className={styles.history}>
                    <section className={styles.resend}>
                        <dl>
                            <dt>재전송 시도 내역</dt>
                            <dd>
                                <section className={styles.resendTxt}>
                                    <p>21.10.01</p>
                                    <p>13:38PM</p>
                                    <p>3,000 건</p>
                                </section>
                            </dd>
                        </dl>
                    </section>
                    <section className={styles.confirm}>
                        <dl>
                            <dt>설문 승인 여부</dt>
                            <dd>
                                <section className={styles.confirmTxt}>
                                    <p>21.10.01</p>
                                    <p>13:38PM</p>
                                    <p>설문거부 (설문 미적합)</p>
                                </section>
                            </dd>
                        </dl>
                    </section>
                </section>
            </div>
            <div className={styles.researchBtnarea}>
            <NavLink to='/registration/surveymodify'>
                <button className={styles.modifyBtn}>수정</button>
            </NavLink>
            <NavLink to='/registration'>
                <button className={styles.listBtn}>목록</button>
            </NavLink>
            </div>
    </div>
    </FadeIn>
    </>
    )
}

export default MarketResearch;