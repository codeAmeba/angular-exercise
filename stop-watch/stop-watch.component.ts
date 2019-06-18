import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  template: `
  <div class="stop-watch">
    <div class="display">{{min < 10 ? '0' + min : min}}:{{sec < 10 ? '0' + sec : sec}}:{{milSec < 10 ? '0' + milSec : milSec}}</div> <!-- 밀리초, 초, 분 각각 인터폴레이션으로 받음 -->
    <button class="control" (click)="startAndStop()">{{state ? 'Stop' : 'Start'}}</button>
    <button class="control" (click)="reset()">Reset</button>
  </div>
  `,
  styles: []
})
export class StopWatchComponent {
  // 100 milSec === 1 sec, 60 sec === 1 min
  // setInterval() 사용해서 반복
  milSec = 0;
  sec = 0;
  min = 0;
  // 버튼 텍스트에 불리언 할당
  state: boolean;
  increaseTime: number;

  startAndStop() {
    // 버튼 클릭 시마다 true, false 반전
    this.state = !this.state;
    // state가 true일 때 setInterval() 시작
    if (this.state === true) {
      this.increaseTime = setInterval(() => {
        this.milSec++;
        if (this.milSec === 100) {
          this.milSec = 0;
          this.sec += 1;
// tslint:disable-next-line: align
        } if (this.sec === 60) {
          this.sec = 0;
          this.min += 1;
        }
      }, 10);
      // state가 false일 때 clearInterval()
    } else {
      clearInterval(this.increaseTime);
    }
    return;
  }

  reset() {
    this.milSec = 0;
    this.sec = 0;
    this.min = 0;
  }
}
