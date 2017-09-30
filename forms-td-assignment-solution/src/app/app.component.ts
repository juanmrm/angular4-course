import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted = false;

  formModel = {
    email: '',
    subscription: '',
    password: ''
  }

  @ViewChild('f') signupForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  onSubmit() {
    this.submitted = true;
    this.formModel.email = this.signupForm.form.value.email;
    this.formModel.subscription = this.signupForm.form.value.subscription;
    this.formModel.password = this.signupForm.form.value.password;
  }

}
