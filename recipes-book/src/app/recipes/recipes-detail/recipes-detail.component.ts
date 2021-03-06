import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Esta solucion no valdria porque solo seria valida para la primera vez, pero si nuestro detalle puede cambiar
    // como es el caso segun vayamos pinchando en los elementos de la lista debemos reaccionar ante el cambio con el observable
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route}); // Notese que no necesitamos pasar el id, ya esta en la ruta relativa
    // this.router.navigate(['../', this.id, 'edit'],  { relativeTo: this.route }); // Otra forma de hacer lo anterior, subiendo un nivel, pasando el id y edit
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
