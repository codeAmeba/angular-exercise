import { Component, OnInit, EventEmitter, Output } from "@angular/core";


@Component ({
  selector: 'app-decrease',
  template: `
    <button class="decrease" (click)="decreaseCounter.emit()">-</button>
  `,
  styles: []
})

export class DecreaseComponent implements OnInit {
  @Output() decreaseCounter = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}
}