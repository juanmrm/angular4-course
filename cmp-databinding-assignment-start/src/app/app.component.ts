import { Component, OnInit } from '@angular/core';
import { GameNumber } from './shared/gamenumber.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numbers: GameNumber[];

  ngOnInit() {
    this.numbers = [];
  }

  onNumberEvent(eventData: {content: number}) {

    let num: number = eventData.content;

    console.log('New number recieved: ' + num);

    if (num % 2 === 0) {
      this.numbers.push({num: num, type: 'even'});
    }
    else this.numbers.push({num: num, type: 'odd'});
  }

}
