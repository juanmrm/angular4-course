import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username-reset',
  templateUrl: './username-reset-component.html',
})
export class UsernameResetComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  username: string = '';

  isUsernameEmpty() {
      return this.username === '' ? true : false;
  }

  resetUsername() {
    this.username = '';
  }

}
