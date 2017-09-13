import { Component, OnInit, Input } from '@angular/core';
import { GameNumber} from '../shared/gamenumber.component';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, GameNumber {

  @Input() num: number;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}

}
