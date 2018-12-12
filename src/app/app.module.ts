import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';
import { CharactersComponent } from './characters/characters.component';
import { CharactersState } from './characters/state/state';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      CharactersState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
