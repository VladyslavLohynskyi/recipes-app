import { useNavigate, useParams } from 'react-router-dom';
import { IMeal } from '../../../utils/interfaces';
import './Meal.scss';
import { useEffect, useRef, useState } from 'react';
import RecipesReq from '../../../http/recipes';
import { RoutesEnum } from '../../../utils/enums';

const Meal = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const ref = useRef<HTMLImageElement>(null);
   const [currentMeal, setCurrentMeal] = useState<IMeal>();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   useEffect(() => {
      if (id) {
         RecipesReq.getMealById(id)
            .then((meal) => setCurrentMeal(meal))
            .catch(() => {
               navigate(RoutesEnum.RECIPES);
            })
            .finally(() => setIsLoading(false));
      }
   }, []);

   const createIngredientElements = () => {
      const htmlElements = [];
      type mealKeys = keyof typeof currentMeal;

      for (let i = 1; i <= 20; i++) {
         if (currentMeal && currentMeal[`strIngredient${i}` as mealKeys]) {
            htmlElements.push(
               <p>
                  {i}. {currentMeal[`strIngredient${i}` as mealKeys]}{' '}
                  {currentMeal[`strMeasure${i}` as mealKeys]}.
               </p>,
            );
         }
      }
      return htmlElements;
   };
   return (
      <div className='meal max-width'>
         {isLoading ? (
            <p>...Loading</p>
         ) : (
            <div className='meal__container'>
               <div className='meal__img-container'>
                  <img
                     src={currentMeal!.strMealThumb}
                     loading='lazy'
                     alt='meal'
                     ref={ref}
                     style={{ height: ref.current?.clientWidth }}
                  />
               </div>
               <div className='meal__info'>
                  <h3>Name: {currentMeal?.strMeal}</h3>
                  <p>Category: {currentMeal?.strCategory}</p>
                  <p>Area: {currentMeal?.strArea}</p>
                  {currentMeal?.strDrinkAlternate && (
                     <p>Drink Alternate: {currentMeal?.strDrinkAlternate}</p>
                  )}
                  {currentMeal?.strTags && <p>Tags: {currentMeal?.strTags}</p>}
                  <p>
                     Youtube:{' '}
                     <a
                        href={currentMeal?.strYoutube}
                        rel='noreferrer'
                        target='_blank'
                     >
                        {currentMeal?.strYoutube}
                     </a>
                  </p>
                  <p>
                     Source:
                     <a
                        href={currentMeal?.strSource}
                        rel='noreferrer'
                        target='_blank'
                     >
                        currentMeal?.strSource
                     </a>
                  </p>
               </div>
               <div className='meal__instruction'>
                  <p>Instructions: {currentMeal?.strInstructions}</p>
               </div>
               <div className='meal__ingredients'>
                  {createIngredientElements()}
               </div>
            </div>
         )}
      </div>
   );
};

export default Meal;
