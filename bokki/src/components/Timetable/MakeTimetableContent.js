import React from 'react';
import './MakeTimetableContent.css';

const MakeTimetableContent = () => {
    return (
        <div className="manage">
            <div className="manageside">
                <p className="manage-title">시간표 생성하기</p>
                <p className="manage-des"> 기본 틀이 만들어져 있는 파일(.xlsx)를 다운받아<br/>과목명, 교사명, 시간을 입력하여 업로드, 생성해 주세요.<br/>시간표는 7교시까지 입력 가능합니다.</p>
            </div>
            <div className="file">
                <div className="input-container">
                    <input className="timetable-down" type="submit" value="반 시간표 입력하기"/> 
                    <div class="filebox"> 
                        <input class="upload-name" value="파일선택" disabled="disabled" /> 
                        <label for="ex_filename">업로드</label> 
                        <input type="file" id="ex_filename" class="upload-hidden" /> 
                    </div>
                </div>
                <div className="input-container">
                    <input className="timetable-down" type="submit" value="학교 시간표 입력하기"/> 
                    <div class="filebox"> 
                        <input class="upload-name" value="파일선택" disabled="disabled" /> 
                        <label for="ex_filename">업로드</label> 
                        <input type="file" id="ex_filename" class="upload-hidden" /> 
                    </div>
                </div>
            </div>
            <input className="upload" type="submit" value="등록하기"/>
        </div>
    );
};

export default MakeTimetableContent;