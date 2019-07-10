import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { CommonModule } from '@angular/common';
import { PopUpModule } from '../popup/popup.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, PopUpModule],
  exports: [GameComponent]
})
export class GameModule {}
