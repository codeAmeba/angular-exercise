import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="plusCount()">+</button><span>{{count}}</span><button (click)="minusCount()">-</button>
  `
})

export class CounterComponent {
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