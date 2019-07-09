import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <game-component></game-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nim-game';
}
