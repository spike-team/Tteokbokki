import React, { useState } from 'react';

import MealCard from './MealCard';
import './MealContent.css'
import { getMeal } from '../../services/get';

const MealContent = ( ) => {

    let date = ()=> {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }

    let schoolCode = sessionStorage.getItem();
    
    const setMeal = async (date, schoolCode ) => {
        try {
            let {breakfast,lunch,dinner} = getMeal(date, schoolCode);
            console.log("success setMeal")
        } catch(error) {
            console.log(error.response);
        }
    }
    return (
        <div className="meal">
            <p className="meal-title">오늘 급식</p>
            <p className="meal-line"/>
            <div className="meal-content">
                <MealCard time="아침" lisk={breakfast} />
                <MealCard time="점심" lisk={lunch} />
                <MealCard time="저녁" lisk={dinner} />
            </div>
            </div>
    );
};

export default MealContent;