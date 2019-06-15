import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="plusCount()">+</button><span>{{count}}</span><button (click)="minusCount()">-</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'counter';
  count = 0;
  plusCount(click: MouseEvent) {
    this.count += 1;
  }
  minusCount(click: MouseEvent) {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
}