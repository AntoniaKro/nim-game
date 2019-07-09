import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule],
  exports: [GameComponent]
})
export class GameModule {}
