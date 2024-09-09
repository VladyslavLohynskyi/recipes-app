import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import './Recipes.scss';
import { getAllRecipes } from '../../../store/reducers/recipes/recipesActionCreators';
import { RecipeCard } from '../components/RecipeCard';

const Recipes = () => {
   const dispatch = useAppDispatch();
   const { meals, count, isLoading } = useAppSelector(
      (state) => state.mealsReducer,
   );
   useEffect(() => {
      dispatch(getAllRecipes(''));
   }, []);
   return (
      <div className='recipes max-width'>
         {isLoading ? (
            <p>...Loading</p>
         ) : (
            <div className='recipes__list'>
               {meals.map((meal) => (
                  <RecipeCard key={meal.idMeal} meal={meal} />
               ))}
            </div>
         )}
      </div>
   );
};

export default Recipes;
