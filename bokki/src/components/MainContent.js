import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <div>
            <div className="banner">
                <p>StudenTable</p>
                <span>우리 학교 시간표,<br/>스튜던테이블에서 간편하게 관리하세요.</span>
            </div>
            <div className="first">
                <span>Automatic School Timetable Generator</span>
                <p id="que">우리 학교 시간표, 어떻게 관리하시나요?</p>
                <p>StudenTable을 사용하면 시간표 관련 업무를 자동화하여 교사 여러분의 소중한 시간을 절약할 수 있습니다.</p>
            </div>
            <div className="second">
                <span>StudenTable with Cloud Platform</span>
                <p id="que">프로그램 설치 없이, 언제 어디서나.</p>
                <p>더 이상 데이터를 외장하드에 담고 다니지 않아도 됩니다.<br/>클라우드를 이용, 업무 환경이 변하더라도 안정적인 서비스를 *제공합니다.</p>
            </div>
        </div>
    );
};

export default MainContent;