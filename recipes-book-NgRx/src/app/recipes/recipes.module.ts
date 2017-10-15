import { RecipeEffects } from './store/recipe.effects';
import { EffectsModule } from '@ngrx/effects';
import { recipeReducer } from './store/recipe.reducers';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipeEditComponent,
        RecipesDetailComponent,
        RecipesItemComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        StoreModule.forFeature('recipes', recipeReducer),
        EffectsModule.forFeature([RecipeEffects])
    ]
})
export class RecipesModule {}
