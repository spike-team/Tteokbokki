import React, { useState } from 'react';

import MealCard from './MealCard';
import './MealContent.css'
import axios from 'axios';

const MealContent = ( {breakfast, lunch, dinner} ) => {

    const [meal, setMeal] = useState(null);
    let showMeal = async () => {
        try {
            const respose = await axios.get();
            setMeal(respose.date);
        } catch (error) {
            console.log (error);
        }
    };

    breakfast= [
                "비피더스사과",
                "흰밥(쌀밥)",
                "실파계란국",
                "삼겹살김치볶음",
                "견과류파래돌김자반",
                "깍두기"
            ];

    return (
        <div className="meal">
            <p className="meal-title">오늘 급식</p>
            <p className="meal-school">대덕소프트웨어마이스터고등학교</p>
            <div className="meal-content">
                <MealCard time="아침" list={breakfast} />
                <MealCard time="점심" list={lunch} />
                <MealCard time="저녁" list={dinner} />
            </div>
            </div>
    );
};

export default MealContent;