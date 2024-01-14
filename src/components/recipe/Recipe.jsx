import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import React from 'react';
import PropTypes from 'prop-types';

import {RecipeInfo} from "../recipe/RecipeInfo.jsx"
export function Recipe({recipe}){
   return (
    <ul>
       {recipe.map(({name, time, servings, calories, image, difficulty}) => {
            return <RecipeInfo
            key = {name}
            name = {name}
            time = {time}
            servings = {servings}
            calories = {calories}
            img = {image}
            difficulty = {difficulty}
            iconTime = {BsAlarm}
            iconCalories = { HiOutlineChartBar}
            iconPie = {HiOutlineChartPie}
            />
       })}
    </ul>
   )
}


Recipe.propTypes = {
    recipe: PropTypes.array
   
}






