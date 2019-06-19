import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-clock',
  template: `
  <div class="clock">
    <div class="analog-clock">
      <div class="hour hand" [ngStyle]="hourHand"></div> <!-- 시침 -->
      <div class="minute hand" [ngStyle]="minHand"></div> <!-- 분침 -->
      <div class="second hand" [ngStyle]="secHand"></div> <!-- 초침 -->
      <div class="center-circle"></div>
    </div>
    <div class="digital-clock">{{hourDigital}}:{{minDigital}}:{{secDigital}}</div>
  </div>
  `,
  styles: []
})
export class ClockComponent {

  now: Date;
  sec: number;
  min: number;
  hour: number;
  secDigital: string;
  minDigital: string;
  hourDigital: string;
  secHand: object;
  minHand: object;
  hourHand: object;

  realTime = setInterval(() => {
    this.nowTime();
  }, 1000);

  nowTime() {
      this.now = new Date();
      this.sec = this.now.getSeconds();
      this.min = this.now.getMinutes();
      this.hour = this.now.getHours();
      this.secDigital = this.sec < 10 ? `0${this.sec}` : `${this.sec}`;
      this.minDigital = this.min < 10 ? `0${this.min}` : `${this.min}`;
      this.hourDigital = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      this.secHand = { transform : `rotate(${this.sec * 6}deg)`};
      this.minHand = { transform : `rotate(${this.min * 6}deg)`};
      this.hourHand = { transform : `rotate(${(this.hour % 12) * 30}deg)`};
  }

}
