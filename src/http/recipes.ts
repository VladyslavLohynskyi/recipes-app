import { $host } from '.';
import { IMeal } from '../utils/interfaces';

class RecipesReq {
   getRecipes = async (name: string) => {
      const { data } = await $host.get<{ meals: IMeal[] }>('search.php/', {
         params: { s: name },
      });
      return data;
   };
   getMealById = async (id: string) => {
      const { data } = await $host.get<{ meals: IMeal[] }>('lookup.php/', {
         params: { i: id },
      });
      return data.meals[0];
   };
}

export default new RecipesReq();
