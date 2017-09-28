import { Component, OnInit, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route});
  }

}
