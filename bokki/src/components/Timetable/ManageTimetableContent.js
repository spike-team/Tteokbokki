import React from 'react';

import './ManageTimetableContent.css';

const ManageTimetableContent = () => {
    return (
        <div className="manage">
            <div className="manageside">
                <p className="manage-title">시간표 등록하기</p>
                <p className="school">대덕소프트웨어마이스터고등학교</p>
                <p className="manage-des"> 기본 틀이 만들어져 있는 파일(.CSV)를 다운받아<br/>현재 학교 시간표를 입력하여 업로드, 등록해 주세요.</p>
            </div>
            <div className="file">
                <input className="timetable-down" type="submit" value="StudentTable.csv                                                  다운"/>
                <input className="timetable-up" type="file"/>
                <input className="upload" type="submit" value="등록하기"/>
            </div>
        </div>
    );
};

export default ManageTimetableContent;