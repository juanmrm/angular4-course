import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent-component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class MyComponent implements OnInit {

  showDetails: boolean = false;
  logClicks: Array<String> = [];

  constructor() {}

  ngOnInit() {}

  displayOrHideDetails(){
    this.showDetails = !this.showDetails;
    this.logClicks.push(new Date().toTimeString());
  }

  hasFiveOrMoreClicks() {
    return this.logClicks.length >= 5;
  }

}
