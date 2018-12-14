import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from './../environments/environment';
import {
  CombatDesignerState
} from './combat-designer/state/state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatGridListModule } from '@angular/material';

import { NgxsModule } from '@ngxs/store';
import { CharactersComponent } from './characters/characters.component';
import { CharactersState } from './characters/state/state';
import { CombatDesignerComponent } from './combat-designer/combat-designer.component';
import { PartyComponent } from './party/party.component';
import { PartiesComponent } from './parties/parties.component';
import { AppRoutingModule } from './app-routing.module';
import { CombatManagerComponent } from './combat-manager/combat-manager.component';
<<<<<<< HEAD
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
=======
import { CharacterComponent } from './character/character.component';
import { CharacterDesignerComponent } from './character-designer/character-designer.component';
>>>>>>> 57a5ad59b05dcac7aa9726a10ecae3f66f480b6d

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CombatDesignerComponent,
    PartyComponent,
    PartiesComponent,
    CombatManagerComponent,
    CharacterComponent,
    CharacterDesignerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    NgxsModule.forRoot([CharactersState, CombatDesignerState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    AppRoutingModule,
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
