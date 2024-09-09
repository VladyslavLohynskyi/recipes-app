import { AppDispatch } from '../../store';
import { recipesSlice } from './recipesSlice';
import RecipesReq from '../../../http/recipes';

export const getAllRecipes =
   (name: string) => async (dispatch: AppDispatch) => {
      dispatch(recipesSlice.actions.getMealsStart());
      const { meals } = await RecipesReq.getRecipes(name);
      dispatch(recipesSlice.actions.getMeals(meals));
   };
