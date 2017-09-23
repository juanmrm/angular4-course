import { Component, OnInit, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

}
