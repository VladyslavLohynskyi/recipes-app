import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getAllRecipes } from './store/reducers/recipes/recipesActionCreators';

function App() {
   const dispatch = useAppDispatch();
   const { meals, count, isLoading } = useAppSelector(
      (state) => state.mealsReducer,
   );
   useEffect(() => {
      dispatch(getAllRecipes(''));
   }, []);
   return (
      <div className='app'>
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
}

export default App;
