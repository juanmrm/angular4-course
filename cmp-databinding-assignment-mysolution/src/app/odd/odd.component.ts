import { Component, OnInit, Input } from '@angular/core';
import { GameNumber} from '../shared/gamenumber.component';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, GameNumber {

  @Input() num: number;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}

}
