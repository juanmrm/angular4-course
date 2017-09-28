import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
         this.id = +params['id'];
         this.editMode = params['id'] != null; // Si existe id en la url sera porque estamos en modo edicion, sino sera undefined.
                                               // Si usaramos strict check !== null no funcionaria porque solo comprobamos si es distinto de null
        }
      )
  }

}
