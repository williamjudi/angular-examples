/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { LoggerService } from './logger/logger.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GreetingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private loggerService: LoggerService) {
    loggerService.log('AppModule created.');
  }
}