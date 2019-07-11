import { TestBed, async } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { PopUpComponent } from '../popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent, PopUpComponent],
      imports: [BrowserAnimationsModule]
    }).compileComponents();
  }));

  it('should render Nim Game in a h1 tag', () => {
    const fixture = TestBed.createComponent(GameComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Nim Game');
  });

  it('should render 3 buttons', () => {
    const fixture = TestBed.createComponent(GameComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const buttons = compiled.querySelector('.button');
    console.log(buttons);
    expect(buttons.toHaveClass('button'));
  });
});
