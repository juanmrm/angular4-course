import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // Returns a copy of this array, not the original.
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice()); // Inform other interested component on changes of the ingredient array.
  }

  addIngredients(ingredients: Ingredient[]) {
    // Pasar todos los elementos del array original transformados a una lista que si acepta el metodo push (Spread operator)
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice()); // Inform other interested component on changes of the ingredient array.
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

}
