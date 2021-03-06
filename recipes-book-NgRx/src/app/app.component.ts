import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnvu-FXntzar_20owRK6BFPCPvWFvzHcY',
      authDomain: 'ng-recipe-book-46e95.firebaseapp.com',
     });

     const authUser = Object.keys(window.localStorage)
     .filter(item => item.startsWith('firebase:authUser'))[0];

     if (authUser) {
        console.log(authUser);
        const userInfo = JSON.parse(window.localStorage.getItem(authUser));
        console.log(userInfo);
     }
  }

}
