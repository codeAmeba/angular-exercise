import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { IncreaseComponent } from './increase/increaser.component';
import { DecreaseComponent } from './decrease/decrease.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncreaseComponent,
    DecreaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
