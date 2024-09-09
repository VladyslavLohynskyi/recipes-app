import { $host } from '.';
import { IMeal } from '../utils/interfaces';

class RecipesReq {
   getRecipes = async (name: string) => {
      const { data } = await $host.get<{ meals: IMeal[] }>('search.php/', {
         params: { s: name },
      });
      return data;
   };
}

export default new RecipesReq();
