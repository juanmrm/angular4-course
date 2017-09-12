import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
              'This is simply a test',
              'http://www.pequerecetas.com/wp-content/uploads/2011/02/solomillo-de-cerdo-al-horno1.jpg'),
    new Recipe('Another Test Recipe',
              'This is another test',
              'http://www.pequerecetas.com/wp-content/uploads/2011/02/solomillo-de-cerdo-al-horno1.jpg')
  ];

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
