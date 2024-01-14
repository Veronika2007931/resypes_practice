import React from 'react';
import PropTypes from 'prop-types';
import {Information, Image, List, Item} from "./RecipeInfo.styled.jsx"

export function RecipeInfo({name, time, servings, calories, img, difficulty, iconTime: IconTime, iconCalories: IconCalories,iconPie: IconPie}){
  return(
    <List>
        <Image src={img} alt={name} width ="500" height="500"/>
        <h2>{name}</h2>
        <Information>
        <Item>< IconPie/> {servings} servings</Item>
         <Item><IconCalories/> {calories} ккал</Item>
         <Item> <IconTime /> {time} хв</Item>
         </Information>
        
       
         <p>Difficulty: {difficulty}</p>
    </List>
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