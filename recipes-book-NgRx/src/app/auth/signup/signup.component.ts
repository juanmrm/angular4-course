import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.store.dispatch(new AuthActions.TrySignup({
      username: form.value.email,
      password: form.value.password
    }));
  }

}
