import { useEffect, useState } from 'react';
import './App.scss';
import { IMeal } from './utils/interfaces';
import RecipesReq from './http/recipes';

function App() {
   const [recipes, setRecipes] = useState<IMeal[]>([]);
   useEffect(() => {
      RecipesReq.getRecipes('').then((recipes) => setRecipes(recipes.meals));
   }, []);
   return <div className='app'>{JSON.stringify(recipes)}</div>;
}

export default App;
