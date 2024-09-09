import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import './Recipes.scss';
import { getAllRecipes } from '../../../store/reducers/recipes/recipesActionCreators';
import { RecipeCard } from '../components/RecipeCard';
import { Input } from '../../ui/Input';
import debounce from 'lodash.debounce';

const Recipes = () => {
   const dispatch = useAppDispatch();
   const { meals, isLoading } = useAppSelector((state) => state.mealsReducer);
   const [name, setName] = useState<string>('');
   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   };
   const debouncedChangeHandler = useMemo(
      () => debounce(handleChangeName, 1000),
      [],
   );
   useEffect(() => {
      dispatch(getAllRecipes(name));
   }, [name]);
   useEffect(() => {
      return () => {
         debouncedChangeHandler.cancel();
      };
   }, [debouncedChangeHandler]);

   return (
      <div className='recipes max-width'>
         <div className='recipes__top-menu'>
            <div className='recipes__input-container'>
               <Input
                  type='text'
                  onChange={debouncedChangeHandler}
                  placeholder='Enter the name'
               />
            </div>
         </div>
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
