import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component ({
  selector: 'app-increase',
  template: `
    <button class="increase" (click)="increaseCounter.emit()">+</button>
  `,
  styles: []
})

export class IncreaseComponent implements OnInit {
  @Output() increaseCounter = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}
}