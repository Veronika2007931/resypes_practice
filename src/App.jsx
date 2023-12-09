import {Recipe} from "./components/recipe/Recipe"
import recipes from "./recipes.json"
import './App.css';

function App() {
  return (
   <>
     < Recipe recipe={recipes} />
   </>
  );
}

export default App;


// Recipe - recipe: array
// RecipeInfo - text: string; 
//              icon: element;
//              time: string;
//              servings: number;
//              calories: number;
//              img: string;
//              difficulty: number;











