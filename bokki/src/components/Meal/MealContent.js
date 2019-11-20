import React from 'react';

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

    let schoolCode = sessionStorage.getItem("access");

    const setMeal = (date, schoolCode ) => {
        try {
            const meal = getMeal(date, schoolCode);
            return {...meal, status: 200};
        } catch(error) {
            console.log(error.response);
            return { status: error.response.status};
        }
    }

    const { breakfast,lunch,dinner, status } = setMeal(date, schoolCode);

    if(status === 200) {
        console.log("급식 불러오기 성공");
    } else if(status === 400) {
        console.log("잘못된 형식의 학교 코드 혹은 날짜 형식");
    } else if(status === 404) {
        console.log("해당 정보를 찾을 수 없음");
    }

    return (
        <div className="meal">
            <p className="meal-title">오늘 급식</p>
            <p className="meal-line"/>
            <div className="meal-content">
                <MealCard time="아침" list={breakfast} />
                <MealCard time="점심" list={lunch} />
                <MealCard time="저녁" list={dinner} />
            </div>
            </div>
    );
};

export default MealContent;