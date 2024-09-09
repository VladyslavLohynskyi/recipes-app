import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mealsReducer from './reducers/recipes/recipesSlice';

const rootReducer = combineReducers({ mealsReducer });

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
