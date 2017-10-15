import 'rxjs/add/operator/take';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) { } //

  ngOnInit() {
    // Esta solucion no valdria porque solo seria valida para la primera vez, pero si nuestro detalle puede cambiar
    // como es el caso segun vayamos pinchando en los elementos de la lista debemos reaccionar ante el cambio con el observable
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeState = this.store.select('recipes');
        }
      );
  }

  toShoppingList() {
    this.store.select('recipes')
      .take(1) // Only take one event.
      .subscribe((recipeState: fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients)
        );
      });
  }

  onEditRecipe() {
    // Notese que no necesitamos pasar el id, ya esta en la ruta relativa
    this.router.navigate(['edit'], { relativeTo: this.route});
        // Otra forma de hacer lo anterior, subiendo un nivel, pasando el id y edit
    // this.router.navigate(['../', this.id, 'edit'],  { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
