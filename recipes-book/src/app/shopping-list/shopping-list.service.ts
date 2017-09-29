import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice(); //Returns a copy of this array, not the original.
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice()); //Inform other interested component on changes of the ingredient array.
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //Pasar todos los elementos del array original transformados a una lista que si acepta el metodo push (Spread operator)
    this.ingredientChanged.next(this.ingredients.slice()); //Inform other interested component on changes of the ingredient array.
  }

}
