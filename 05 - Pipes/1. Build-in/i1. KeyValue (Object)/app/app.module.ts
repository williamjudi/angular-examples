/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class AppModule {}
