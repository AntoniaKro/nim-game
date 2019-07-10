import { Component, DoCheck } from '@angular/core';

const COUNTER_START_VALUE = 3;
const ALERT_TEXT_MOVE = 'The Computer made its move. Now it is your turn';

@Component({
  selector: 'app-game-component',
  templateUrl: '../game/game.component.html',
  styleUrls: ['../game/game.component.scss']
})
export class GameComponent implements DoCheck {
  rows: number[][];
  counter: number;
  player: string;
  popUpOpen: boolean;
  popUpMoveOpen: boolean;
  textPopUpMove = ALERT_TEXT_MOVE;

  constructor() {
    this.reset();
  }

  ngDoCheck() {
    if ([].concat(...this.rows).reduce((acc, curr) => acc + curr) === 1) {
      this.popUpOpen = true;
      this.reset();
    } else if (this.counter === 0) {
      this.popUpMoveOpen = true;
      this.computerTurn();
      this.counter = COUNTER_START_VALUE;
    }
  }

  computerTurn() {
    const row = Math.round(Math.random() * (this.rows.length - 1));
    const amount = Math.max(1, Math.round(Math.random() * 3));
    if (this.rows[row].length !== 0 && this.rows[row].length >= amount) {
      this.player = 'Computer';
      this.rows[row] = this.rows[row].slice(0, this.rows[row].length - amount);
      this.counter = COUNTER_START_VALUE;
    } else {
      this.computerTurn();
    }
  }

  handleComputerClick() {
    this.player = 'Computer';
    this.computerTurn();
    this.counter = COUNTER_START_VALUE;
  }

  reset() {
    this.player = 'You';
    this.rows = [[1], [1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]];
    this.counter = COUNTER_START_VALUE;
    setTimeout(() => (this.popUpOpen = false), 5000);
  }

  handleReset() {
    this.reset();
  }

  handlePlayerClick(row, index) {
    this.player = 'You';
    this.rows[row] = [
      ...this.rows[row].slice(0, index),
      ...this.rows[row].slice(index + 1)
    ];
    this.counter = this.counter - 1;
  }

  closePopUp() {
    this.popUpMoveOpen = false;
  }
}
