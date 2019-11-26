import React from 'react';
import './MakeTimetableContent.css';

const MakeTimetableContent = () => {
    return (
        <div className = "manage">
            <div className="manageside">
                <p className="manage-title">시간표 만들기</p>
                <p className="school">대덕소프트웨어마이스터고등학교</p>
                <p className="manage-des"> 기본 틀이 만들어져 있는 파일(.CSV)를 다운받아<br/>과목별 정보를 입력해 업로드, 시간표를 생성해주세요.</p>
            </div>
            <div className="file">
                <input className="timetable-down" type="submit" value="Make-StudenTable.csv 다운받기"/>
                <div className="input-container">
                    <input className="timetable-up" id="my-file" type="file"/>
                    <label htmlFor="my-file" className="input-label">파일 업로드하기</label>
                </div>
                <input className="upload" type="submit" value="등록하기"/>
            </div>
        </div>
    );
};

export default MakeTimetableContent;