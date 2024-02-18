import styled from "styled-components"

export const Item = styled.li`
    margin: 5px;
    border-radius: 5px;
    padding:3px;

    color:${(props)=>{
     return  props.difficulty? "white" : "black"}};

    background-color:${(props)=>{
     return  props.difficulty? "#f77534c4" : "none"}};
   
`

export const DificultyDiv = styled.div`
    background-color: #fdf7f4;
    padding:8px;
    border-radius:20px;
    margin-bottom:20px;
`
export const Dificulty = styled.p`
   font-weight:700;
`





