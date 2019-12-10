import React from 'react';

import './AddTimetableContent.css';

const AddTimetableContent = () => {

    // let schoolClass = ({value})=> [year, month, day].join('-');
    // let filename = 

    // const getfilename = () => {

    // }
    


    return (
        
        <div className="manage">
            <div className="manageside">
                <p className="manage-title">시간표 등록하기</p>
                <div className="select-class">
                    <select>
                        <option value="1-">1학년</option>
                        <option value="2-">2학년</option>
                        <option value="3-">3학년</option>
                        <option value="4-">4학년</option>
                        <option value="5-">5학년</option>
                        <option value="6-">6학년</option>
                    </select>
                    <input className="class-value" type="text" placeholder="반" />
                </div>
                <p className="manage-des"> 기본 틀이 만들어져 있는 파일(.xlsx)를 다운받아<br/>과목명, 교사명, 시간을 입력하여 업로드, 생성해 주세요.<br/>시간표는 7교시까지 입력 가능합니다.</p>
            </div>
            <div className="file">
                <div className="input-container">
                    <a download href="http://studentable.jaehoon.kim/api/v1/timetable/excel?schoolClass=2-1&schoolCode=7430310" target="_sub"><input className="timetable-down" type="submit" value="반 시간표 다운로드하기"  /> </a>
                    <div class="filebox"> 
                        <input class="upload-name" value="파일선택" disabled="disabled" /> 
                        <label for="ex_filename" >업로드</label> 
                        <input type="file" id="ex_filename" class="upload-hidden" value=""/> 
                    </div>
                </div>
                <div className="input-container">
                <a download href="http://studentable.jaehoon.kim/api/v1/timetables/excel?schoolCode=7430310" target="_sub"><input className="timetable-down" type="submit" value="학교 시간표 다운로드하기"  /> </a>
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

export default AddTimetableContent;