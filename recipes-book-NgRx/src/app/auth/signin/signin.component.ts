import { Store } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.store.dispatch(new AuthActions.TrySignin({
      username: form.value.email,
      password: form.value.password
    }));
  }

}
