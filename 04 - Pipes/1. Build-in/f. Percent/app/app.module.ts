/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreetingComponent } from './greeting.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [BrowserModule],
  declarations: [GreetingComponent],
  bootstrap: [GreetingComponent]
})
export class AppModule { }