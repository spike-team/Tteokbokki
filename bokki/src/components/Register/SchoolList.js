import React from 'react';
import './SchoolList.css';

import './SchoolModal';

const SchoolList = ({setname, schoolCode, name, fullName} ) => {

    const clickbtn = ( name, schoolCode) => {
        setname(name);
        sessionStorage.setItem("schoolCode", schoolCode);
    }

    return (
        <tr className="schoolItem"  onClick={()=>clickbtn( name, schoolCode )}>
            <td><span className="school-name" >{name}</span></td>
            <td>{fullName}</td>
            <td>{schoolCode}</td>
        </tr>
    );
};

export default SchoolList;