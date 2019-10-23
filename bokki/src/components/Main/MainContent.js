import React from 'react';
import './MainContent.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const MainContent = () => {
    return (
        <div>
            <div className="banner">
                <p>StudenTable</p>
                <span>우리 학교 시간표,<br />스튜던테이블에서 간편하게 관리하세요.</span>
            </div>
            
            <div className="first">
                <span>Automatic School Timetable Generator</span>
                <p id="que">우리 학교 시간표, 어떻게 관리하시나요?</p>
                <p>StudenTable을 사용하면 시간표 관련 업무를 자동화하여 교사 여러분의 소중한 시간을 절약할 수 있습니다.</p>
                <div id="block">
                    <div id="one">
                        <img className="icon" alt="" src={icon1} />
                        <div className="dcp"><b>시간표 자동 편성</b><br />교과 목록만 입력하면 시간표를 자동으로 생성합니다.</div>
                    </div>
                    <div id="two">
                        <img className="icon" alt="" src={icon2} />
                        <div className="dcp"><b>교육행정정보시스템(나이스) 연동</b><br />시간표를 .CSV 파일로 다운받아 쉽게 연동할 수 있습니다.</div>
                    </div>
                    <div id="three">
                        <img className="icon" alt="" src={icon3} />
                        <div className="dcp"><b>시간표 변동사항을 간편하게 공지</b><br />앱을 통해 학생들에게 시간표 변동사항을 공지합니다.</div>
                    </div>
                    <div id="four">
                        <img className="icon" alt="" src={icon4} />
                        <div className="dcp"><b>문서 생성 자동화</b><br />공지할 때 필요한 문서를 자동으로 생성합니다.</div>
                    </div>
                </div>
            </div>

            <div className="second">
                <span>StudenTable with Cloud Platform</span>
                <p id="que">프로그램 설치 없이, 언제 어디서나.</p>
                <p>더 이상 데이터를 외장하드에 담고 다니지 않아도 됩니다.<br />클라우드를 이용, 업무 환경이 변하더라도 안정적인 서비스를 제공합니다.</p>
            </div>
        </div>
    );
};

export default MainContent;