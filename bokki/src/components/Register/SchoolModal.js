import React,{ useState } from 'react';
import Popup from "reactjs-popup";

import './SchoolModal.css';
import { searchSchool } from '../../services/get'
import SchoolList from './SchoolList';

const SchoolModal = () => {
  
  const [search, setSearch] = useState("");
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
    schools.then(function(schools) {
     const school = schools.map((school) => (
       console.log(school)
      )
    )
  })}

  return ( 
    <Popup trigger={<button className="modal-btn"> 학교 검색 </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close} href="">&times;</a>
        <div className="modal-header"> 학교 이름 검색하기 </div>
        <div className="content">
          <input className="modal-search" value={search} onChange={onSearch} placeholder="학교 이름을 검색하세요."></input> 
          <button className="btn" onClick={()=>searchSchoolList(search)}>검색</button>

        <table className="school-list" summary="학교 검색 후 학교 정보를 보여주는 표로, 학교명, 소속교육청을 포함한 학교명, 학교코드로 진행됩니다.">
          <thead>
            <tr>
              <th>학교명</th>
              <th>소속교육청 포함 학교명</th>
              <th>학교코드</th>
            </tr>
          </thead>
        </table>
        </div>
        <div className="actions">
          <button className="button" onClick={() => {console.log("modal closed "); close(); }} >
            close modal
          </button>
        </div>
        
      </div>
    )}
    </Popup>
  );
};

export default SchoolModal;