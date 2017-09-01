import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
              'This is simply a test',
              'http://www.pequerecetas.com/wp-content/uploads/2011/02/solomillo-de-cerdo-al-horno1.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

}
