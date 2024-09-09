import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import './Recipes.scss';
import { getAllRecipes } from '../../../store/reducers/recipes/recipesActionCreators';

const Recipes = () => {
   const dispatch = useAppDispatch();
   const { meals, count, isLoading } = useAppSelector(
      (state) => state.mealsReducer,
   );
   useEffect(() => {
      dispatch(getAllRecipes(''));
   }, []);
   return (
      <div className='recipes'>
         {isLoading ? (
            <p>...Loading</p>
         ) : (
            <p>
               {' '}
               {count} {JSON.stringify(meals)}
            </p>
         )}
      </div>
   );
};

export default Recipes;
