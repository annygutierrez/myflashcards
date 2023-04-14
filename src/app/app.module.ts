import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsComponent } from '../components/controls/controls.component';
import { CardGameComponent } from '../components/card-game/card-game.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
