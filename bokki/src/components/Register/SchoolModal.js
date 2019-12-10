import React,{ useState } from 'react';
import Popup from "reactjs-popup";

import './SchoolModal.css';
import { searchSchool } from '../../services/get'
import SchoolList from './SchoolList';

const SchoolModal = ({setname}) => {
  
  const [search, setSearch] = useState("");
  const [list, setList] = useState("");

  const onSearch = e => {
      setSearch(e.target.value);
  };
 
  const searchSchoolList = (search) => {
    try {
      const schools = Promise.resolve(searchSchool(search));
      makelist(schools);
    } catch(error) {
      console.log(error.response);
    }
  }

  const makelist = (schools) => {
    schools.then(schools => {
      setList(schools.map( school => ( <SchoolList name={school.name} fullName={school.fullName} schoolCode={school.schoolCode} setname={setname} /> )));
    })
  }

  return ( 
    <Popup trigger={<button className="modal-btn"> 학교 검색 </button>} modal>
    {close => (
      <div className="modal">
        <div className="modal-header"> 학교 이름 검색하기 </div>
        <div className="content">
          <input className="modal-search" value={search} onChange={onSearch} placeholder="학교 이름을 검색하세요."></input> 
          <button className="btn" onClick={()=>searchSchoolList(search)}>검색</button>

        <table className="school-list" summary="학교 검색 후 학교 정보를 보여주는 표로, 학교명, 소속교육청을 포함한 학교명, 학교코드로 진행됩니다.">
          <thead>
            <tr className="list-header">
              <th>학교명</th>
              <th>소속교육청 포함 학교명</th>
              <th>학교코드</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
        </div>
        <button className="close" onClick={() => { close(); }}>창 닫기</button>
      </div>
    )}
    </Popup>

  );
};

export default SchoolModal;