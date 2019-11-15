import React from 'react';

import './MealCard.css';

const MealCard = ({time, list}) => {
    let mealList;

    if (list) {
        if ((list.length === 1 && list[0] === '') || list.length === 0) {
            mealList = <span className="meal-temp">급식이 없어연</span>;
        } else {
            mealList = list.map((data, index) => (
                <span className="meal-menu" 
                key={`menu.num${index}-${data}`} > {data} </span>
            ));
        }
    } else {
        mealList = <span className="meal-temp">급식이 없어연</span>;
    }
    
    return (
        <div className="meal-wrapper">
            <p className="meal-time">{time}</p>
            <div className="meal-list">{mealList}</div>
        </div>
    );
};

export default MealCard;