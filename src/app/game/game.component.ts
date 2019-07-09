import { Component } from '@angular/core';

@Component({
  selector: 'game-component',
  templateUrl: '../game/game.component.html',
  styleUrls: ['../game/game.component.css']
})
export class GameComponent {
  row1: number[] = [1];
  row2: number[] = [1, 1, 1];
  row3: number[] = [1, 1, 1, 1, 1];
  row4: number[] = [1, 1, 1, 1, 1, 1, 1];

  constructor() {}

  handleComputerClick() {
    console.log('computer');
  }
  handleResetClick() {
    this.row1 = [1];
    this.row2 = [1, 1, 1];
    this.row3 = [1, 1, 1, 1, 1];
    this.row4 = [1, 1, 1, 1, 1, 1, 1];
  }

  handleClick1(index) {
    this.row1 = [...this.row1.slice(0, index), ...this.row1.slice(index + 1)];
  }
  handleClick2(index) {
    this.row2 = [...this.row2.slice(0, index), ...this.row2.slice(index + 1)];
  }
  handleClick3(index) {
    this.row3 = [...this.row3.slice(0, index), ...this.row3.slice(index + 1)];
  }
  handleClick4(index) {
    this.row4 = [...this.row4.slice(0, index), ...this.row4.slice(index + 1)];
  }
}
