import {Recipe} from "./components/recipe/Recipe"
import recipes from "./recipes.json"
import { GlobalStyles } from "./GlobalStyle.styled.jsx";
import './App.css';

function App() {
  return (
   <>
     < Recipe recipe={recipes} difficulty={recipes.difficulty} />
     <GlobalStyles/>
   </>
  );
}

export default App;














