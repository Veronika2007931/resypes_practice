import {Item} from "./Difficulty.styled"

export function Difficulty({difficulty}){

   

      return(
        <div>
        <p>Difficulty</p>
        <ul>
         <Item  difficulty={difficulty === 0}>Easy</Item>
         <Item difficulty={difficulty === 1}>Medium</Item>
         <Item difficulty={difficulty === 2}>Hard</Item>
         <p>hello</p>
        </ul>
        </div>
      )
}