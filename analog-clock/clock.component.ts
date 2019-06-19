import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
  <div class="clock">
    <div class="analog-clock">
    <!-- [ngStyle] 프로퍼티 바인딩으로 바늘에 css 적용 -->
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

  // 타입 지정
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

  // 시간 데이터를 setInterval() 사용하여 1초마다 지속적 갱신
  realTime = setInterval(() => {
    this.nowTime();
  }, 1000);

  nowTime() {
      // Date()로 시간정보 취득 후 초, 분, 시 각각 할당
      this.now = new Date();
      this.sec = this.now.getSeconds();
      this.min = this.now.getMinutes();
      this.hour = this.now.getHours();
      // 디지털시계 문자열 할당, 삼항연산자 사용하여 한자리수일 때에는 앞에 0 붙임.
      this.secDigital = this.sec < 10 ? `0${this.sec}` : `${this.sec}`;
      this.minDigital = this.min < 10 ? `0${this.min}` : `${this.min}`;
      this.hourDigital = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      // 아날로그 시계에 css 객체 할당
      this.secHand = { transform : `rotate(${this.sec * 6}deg)`};
      this.minHand = { transform : `rotate(${this.min * 6}deg)`};
      this.hourHand = { transform : `rotate(${(this.hour % 12) * 30}deg)`};
  }

}
