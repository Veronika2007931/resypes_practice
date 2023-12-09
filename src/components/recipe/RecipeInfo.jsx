import React from 'react';
import PropTypes from 'prop-types';

export function RecipeInfo({name, time, servings, colories, img, difficulty, iconTime: IconTime, iconCalories: IconCalories,iconPie: IconPie}){
  return(
    <li>
        <img src={img} alt={name} width ="500" height="500"/>
        <h2>{name}</h2>
         <p>< IconPie/>Кількість порцій: {servings}</p>
         <p><IconCalories/>Кількість калорій: {colories} ккал</p>
         <p>{difficulty}</p>
         <p> <IconTime /> Час приготування: {time} хв</p>
    </li>
  )
}



RecipeInfo.propTypes = {
    text: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number,
    icon: PropTypes.element
}