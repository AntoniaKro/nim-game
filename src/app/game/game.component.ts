import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'game-component',
  templateUrl: '../game/game.component.html',
  styleUrls: ['../game/game.component.css']
})
export class GameComponent implements DoCheck {
  items: number[][] = [[1], [1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]];
  counter: number = 3;
  player: string = 'You';
  constructor() {}
  ngDoCheck() {
    if ([].concat(...this.items).reduce((acc, curr) => acc + curr) === 1) {
      window.alert(
        this.player === 'You' ? 'You won' : 'You lost. The computer won'
      );
      this.handleReset();
    } else if (this.counter === 0) {
      this.computerTurn();
      this.counter = 3;
      window.alert('Computer made move. Your turn');
    } else {
      return;
    }
  }
  computerTurn() {
    let row: number = Math.round(Math.random() * 3);
    let amount: number = Math.round(Math.random() * (3 - 1) + 1);
    if (
      this.items[`${row}`].length !== 0 &&
      this.items[`${row}`].length >= amount
    ) {
      this.player = 'Computer';
      for (var i = 0; i <= amount; i++) {
        this.items[`${row}`].pop();
      }
      this.counter = 3;
    } else {
      this.computerTurn();
    }
  }

  handleComputerClick() {
    this.player = 'Computer';
    this.computerTurn();
    this.counter = 3;
  }

  handleReset() {
    this.player = 'You';
    this.items = [[1], [1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]];
    this.counter = 3;
  }

  handlePlayerClick(row, index) {
    this.player = 'You';
    this.items[`${row}`] = [
      ...this.items[`${row}`].slice(0, index),
      ...this.items[`${row}`].slice(index + 1)
    ];
    this.counter = this.counter - 1;
  }
}
