import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GameService} from './game.service';
import {Globals} from './utils/globals';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
	constructor(injector: Injector) {
		Globals.injector = injector
	}
}
