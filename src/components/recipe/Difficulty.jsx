import {Item, DificultyDiv, Dificulty} from "./Difficulty.styled"

export function Difficulty({difficulty}){

   

      return(
        <DificultyDiv>
        <Dificulty>Difficulty</Dificulty>
        <ul>
         <Item  difficulty={difficulty === 0}>Easy</Item>
         <Item difficulty={difficulty === 1}>Medium</Item>
         <Item difficulty={difficulty === 2}>Hard</Item>
        </ul>
        </DificultyDiv>
      )
}