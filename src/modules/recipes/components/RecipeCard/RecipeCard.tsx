import React, { useRef } from 'react';

import './RecipeCard.scss';
import { useNavigate } from 'react-router-dom';
import { IRecipeCardType } from './RecipeCardType';
import { RoutesEnum } from '../../../../utils/enums';

export const RecipeCard: React.FC<IRecipeCardType> = ({ meal }) => {
   const ref = useRef<HTMLImageElement>(null);
   const navigate = useNavigate();
   return (
      <div
         className='recipe-card'
         onClick={() => navigate(RoutesEnum.MEAL + '/' + meal.idMeal)}
      >
         <div className='recipe-card__img-container'>
            <img
               src={meal.strMealThumb}
               loading='lazy'
               alt='meal'
               ref={ref}
               style={{ height: ref.current?.clientWidth }}
            />
         </div>
         <div className='recipe-card__info'>
            <p>{meal.strMeal}</p>
            <div>
               <p>{meal.strCategory}</p>
               <p>{meal.strArea}</p>
            </div>
         </div>
      </div>
   );
};
