import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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
    new Recipe('Solomillo de cerdo al horbo',
              'Receta de solomillo de cerdo al horno',
              'http://www.pequerecetas.com/wp-content/uploads/2011/02/solomillo-de-cerdo-al-horno1.jpg',
              [
                new Ingredient('Solomillo de cerdo', 1),
                new Ingredient('Aceite', 1),
                new Ingredient('Tomillo', 1),
              ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
