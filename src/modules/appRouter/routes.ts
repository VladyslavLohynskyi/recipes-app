import { RoutesEnum } from '../../utils/enums';
import { IRoutes } from '../../utils/interfaces';
import Meal from '../meal/page/Meal';
import Recipes from '../recipes/page/Recipes';
import Selected from '../selected/page/Selected';

export const publicRoutes: IRoutes[] = [
   {
      path: RoutesEnum.RECIPES,
      Component: Recipes,
   },
   {
      path: RoutesEnum.MEAL + '/:id',
      Component: Meal,
   },
   {
      path: RoutesEnum.SELECTED,
      Component: Selected,
   },
];
