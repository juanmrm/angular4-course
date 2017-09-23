import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice(); //Returns a copy of this array, not the original.
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice()); //Inform other interested component on changes of the ingredient array.
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //Pasar todos los elementos del array original transformados a una lista que si acepta el metodo push (Spread operator)
    this.ingredientChanged.emit(this.ingredients.slice()); //Inform other interested component on changes of the ingredient array.
  }

}
