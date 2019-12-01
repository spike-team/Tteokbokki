import React from 'react';
import './SchoolList.css';

import './SchoolModal';

const SchoolList = ( school ) => {

    const { name, fullName, schoolCode } = school;

    return (
        <tr className="schoolItem">
            <td><a className="school-name" href=""  >{name}</a></td>
            <td>{fullName}</td>
            <td>{schoolCode}</td>
        </tr>
    );
};

export default SchoolList;