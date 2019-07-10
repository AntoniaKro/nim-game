import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-game-component></app-game-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nim-game';
}
