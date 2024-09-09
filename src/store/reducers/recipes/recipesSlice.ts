import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMeal } from '../../../utils/interfaces';

interface IMealsState {
   meals: IMeal[];
   count: number;
   limit: number;
   offset: number;
   isLoading: boolean;
}

const initialState: IMealsState = {
   meals: [],
   count: 0,
   limit: 8,
   offset: 1,
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
      },
   },
});

export default recipesSlice.reducer;
