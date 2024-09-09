import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMeal } from '../../../utils/interfaces';
import { changePage } from './recipesActionCreators';

interface IMealsState {
   meals: IMeal[];
   filteredMeals: IMeal[];
   count: number;
   limit: number;
   page: number;
   isLoading: boolean;
}

const initialState: IMealsState = {
   meals: [],
   filteredMeals: [],
   count: 0,
   limit: 8,
   page: 1,
   isLoading: true,
};

export const recipesSlice = createSlice({
   name: 'recipes',
   initialState,
   reducers: {
      getMealsStart(state) {
         state.isLoading = true;
      },
      getMeals(state, action: PayloadAction<IMeal[]>) {
         state.isLoading = false;
         state.meals = action.payload;
         state.count = action.payload.length;
         state.page = 1;
         state.filteredMeals = action.payload.slice(
            (state.page - 1) * state.limit,
            state.page * state.limit,
         );
      },
      changePage(state, action: PayloadAction<number>) {
         state.page = action.payload;
         state.filteredMeals = state.meals.slice(
            (state.page - 1) * state.limit,
            state.page * state.limit,
         );
      },
   },
});

export default recipesSlice.reducer;
