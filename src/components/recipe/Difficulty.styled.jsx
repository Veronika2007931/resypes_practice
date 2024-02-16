import styled from "styled-components"

export const Item = styled.li`
    background-color:${(props)=>{
     return  props.difficulty? "red" : "none"
    }};
`





