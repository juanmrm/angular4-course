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
  }

}
