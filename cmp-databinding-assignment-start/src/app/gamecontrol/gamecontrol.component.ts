import {
  Component,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  currentNumber: number;
  timerId;

  @Output('numberEvent') numberEmitter = new EventEmitter<{content: number}>();

  constructor() { }

  ngOnInit() {
    this.currentNumber = 0;
    this.timerId = -1;
  }

  startGame() {
    console.log('Game started');
    this.timerId = setInterval(() => {
      this.numberEmitter.emit({ content: this.currentNumber++});
    }, 1000);
  }

  stopGame() {
    console.log('Game stopped');
    clearInterval(this.timerId);
  }

}
