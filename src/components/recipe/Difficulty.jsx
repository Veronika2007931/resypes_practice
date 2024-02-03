

export function Difficulty({difficalty}){

   if(difficalty === 0){
      return(<p>Easy</p>)
   }else if(difficalty === 1){
    return(<p>Medium</p>)
   }else if(difficalty === 2){
    return(<p>Hard</p>)
   }


      return(
        <div>
        <p>Difficulty</p>
        <ul>
         <li>Easy</li>
         <li>Medium</li>
         <li>Hard</li>
        </ul>
        </div>
      )
}