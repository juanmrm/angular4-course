import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

// Estamos haciendo que este estado extienda del estado global para tener acceso a todos los estados
// registrados en la aplicacion.
export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

// The initial state
const initialState: State = {
  recipes: [
    new Recipe('Sabrosa Hamburguesa',
              'Receta de una sabrosa hamburguesa',
              'http://diferenciaentre.info/wp-content/uploads/2016/07/hamburguesa.jpg',
              [
                new Ingredient('Carne', 1),
                new Ingredient('Tomate', 1),
                new Ingredient('Lechuga', 1),
                new Ingredient('Cebolla', 1),
                new Ingredient('Pepinillo', 1),
                new Ingredient('Patatas', 20),
              ]),
    new Recipe('Solomillo de cerdo al horno',
              'Receta de solomillo de cerdo al horno',
              'http://www.pequerecetas.com/wp-content/uploads/2011/02/solomillo-de-cerdo-al-horno1.jpg',
              [
                new Ingredient('Solomillo de cerdo', 1),
                new Ingredient('Aceite', 1),
                new Ingredient('Tomillo', 1),
              ])
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {

  let recipe: Recipe, recipes: Recipe[];

  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      recipes = [...state.recipes];
      recipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: recipes
      };
    default:
      return state;
  }
}
