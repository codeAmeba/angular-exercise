import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <app-increase (increaseCounter)="increaseCounter($event)"></app-increase>
  <span>{{Count}}</span>
  <app-decrease (decreaseCounter)="decreaseCounter($event)"></app-decrease>
  `
})

export class CounterComponent implements OnInit {
  count: number;
  constructor() {}
  ngOnInit() {
    this.count = 0;
  }
  increaseCounter() {
    this.count += 1;
  }
  decreaseCounter() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
  get Count() {
    return this.count;
  }
}